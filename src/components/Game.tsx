import { useEffect, useRef, useState, useCallback } from 'react'
import * as THREE from 'three'
import { Character, Weapon, WEAPONS } from '../App'

interface Props {
  playerCharacter: Character
  playerWeapon: Weapon
  onBackToMenu: () => void
}

interface Bullet {
  mesh: THREE.Mesh
  velocity: THREE.Vector3
  life: number
  ownerId: string
  damage: number
}

interface Obstacle {
  min: THREE.Vector3
  max: THREE.Vector3
}

interface BotState {
  id: string
  model: THREE.Group
  pos: THREE.Vector3
  hp: number
  maxHp: number
  lastShot: number
  strafeDir: number
  strafeTimer: number
  name: string
  emoji: string
}

export default function Game({ playerCharacter, playerWeapon, onBackToMenu }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [playerHP, setPlayerHP] = useState(playerCharacter === 'lisa' ? 100 : 80)
  const [bot1HP, setBot1HP] = useState(0)
  const [bot2HP, setBot2HP] = useState(100) // Айдар
  const [gameOver, setGameOver] = useState<'win' | 'lose' | null>(null)
  const maxAmmo = playerWeapon === 'shotgun' ? 8 : playerWeapon === 'sniper' ? 5 : playerWeapon === 'pistol' ? 12 : 30
  const [ammo, setAmmo] = useState(maxAmmo)
  const [isReloading, setIsReloading] = useState(false)
  const [hitMarker, setHitMarker] = useState(false)
  const [damageFlash, setDamageFlash] = useState(false)
  const [killCount, setKillCount] = useState(0)
  const [needsLock, setNeedsLock] = useState(true)

  const weaponStats = WEAPONS[playerWeapon]
  const bot1Character: Character = playerCharacter === 'lisa' ? 'dasha' : 'lisa'
  const playerMaxHP = playerCharacter === 'lisa' ? 100 : 80
  const bot1MaxHP = bot1Character === 'lisa' ? 100 : 80
  const playerSpeed = playerCharacter === 'lisa' ? 10 : 14

  // Initialize bot1 HP
  useEffect(() => { setBot1HP(bot1MaxHP) }, [])

  const showHitMarker = useCallback(() => {
    setHitMarker(true)
    setTimeout(() => setHitMarker(false), 150)
  }, [])

  const showDamageFlash = useCallback(() => {
    setDamageFlash(true)
    setTimeout(() => setDamageFlash(false), 200)
  }, [])

  useEffect(() => {
    if (!containerRef.current) return
    const container = containerRef.current

    // ===== SCENE =====
    const scene = new THREE.Scene()
    scene.background = new THREE.Color(0x6bb3d9)

    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 500)
    const renderer = new THREE.WebGLRenderer({ antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // ===== LIGHTING =====
    scene.add(new THREE.AmbientLight(0xffffff, 0.6))
    const sunLight = new THREE.DirectionalLight(0xffeedd, 1.0)
    sunLight.position.set(30, 80, 40)
    sunLight.castShadow = true
    sunLight.shadow.mapSize.set(2048, 2048)
    sunLight.shadow.camera.near = 1; sunLight.shadow.camera.far = 200
    sunLight.shadow.camera.left = -80; sunLight.shadow.camera.right = 80
    sunLight.shadow.camera.top = 80; sunLight.shadow.camera.bottom = -80
    scene.add(sunLight)
    scene.add(new THREE.HemisphereLight(0x87ceeb, 0x3d8c40, 0.3))

    // ===== GROUND =====
    const ground = new THREE.Mesh(new THREE.PlaneGeometry(200, 200), new THREE.MeshLambertMaterial({ color: 0x4a8c3f }))
    ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground)

    // ===== OBSTACLES =====
    const obstacles: Obstacle[] = []
    const addObs = (x: number, z: number, w: number, h: number, d: number, color: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }))
      mesh.position.set(x, h / 2, z); mesh.castShadow = true; mesh.receiveShadow = true; scene.add(mesh)
      obstacles.push({ min: new THREE.Vector3(x - w/2, 0, z - d/2), max: new THREE.Vector3(x + w/2, h, z + d/2) })
    }
    addObs(-25, -25, 10, 8, 10, 0x8b6914)
    addObs(25, 25, 10, 8, 10, 0x8b6914)
    addObs(-25, 25, 8, 5, 8, 0x696969)
    addObs(25, -25, 8, 5, 8, 0x696969)
    addObs(0, 0, 5, 4, 5, 0xa0522d)
    addObs(-40, 0, 3, 3, 15, 0x556b2f)
    addObs(40, 0, 3, 3, 15, 0x556b2f)
    addObs(0, -40, 15, 3, 3, 0x556b2f)
    addObs(0, 40, 15, 3, 3, 0x556b2f)
    addObs(-10, -10, 3, 2, 3, 0xdeb887)
    addObs(10, 10, 3, 2, 3, 0xdeb887)
    addObs(-35, -35, 4, 3, 4, 0x4a4a4a)
    addObs(35, 35, 4, 3, 4, 0x4a4a4a)
    addObs(35, -35, 4, 3, 4, 0x4a4a4a)
    addObs(-35, 35, 4, 3, 4, 0x4a4a4a)
    addObs(0, -90, 200, 10, 5, 0x3a3a3a)
    addObs(0, 90, 200, 10, 5, 0x3a3a3a)
    addObs(-90, 0, 5, 10, 200, 0x3a3a3a)
    addObs(90, 0, 5, 10, 200, 0x3a3a3a)

    // Trees
    const createTree = (x: number, z: number) => {
      const trunk = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.4, 3, 6), new THREE.MeshLambertMaterial({ color: 0x654321 }))
      trunk.position.set(x, 1.5, z); trunk.castShadow = true; scene.add(trunk)
      const leaves = new THREE.Mesh(new THREE.SphereGeometry(2, 8, 6), new THREE.MeshLambertMaterial({ color: 0x228b22 }))
      leaves.position.set(x, 4, z); leaves.castShadow = true; scene.add(leaves)
    }
    ;[[-50,-50],[50,50],[-50,50],[50,-50],[-60,0],[60,0],[0,-60],[0,60]].forEach(([x,z]) => createTree(x, z))

    // ===== CHARACTER: LISA =====
    const createLisa = (): THREE.Group => {
      const g = new THREE.Group()
      const pantsMat = new THREE.MeshLambertMaterial({ color: 0xff69b4 })
      const topMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdbac })
      const hairMat = new THREE.MeshLambertMaterial({ color: 0x722f37 })
      const legGeo = new THREE.CylinderGeometry(0.12, 0.11, 0.7, 8)
      const lL = new THREE.Mesh(legGeo, pantsMat); lL.position.set(-0.15, 0.35, 0); lL.castShadow = true; g.add(lL)
      const lR = new THREE.Mesh(legGeo, pantsMat); lR.position.set(0.15, 0.35, 0); lR.castShadow = true; g.add(lR)
      const shoeMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const shoeGeo = new THREE.BoxGeometry(0.14, 0.08, 0.22)
      g.add(Object.assign(new THREE.Mesh(shoeGeo, shoeMat), { position: new THREE.Vector3(-0.15, 0.04, 0.03) }))
      g.add(Object.assign(new THREE.Mesh(shoeGeo, shoeMat), { position: new THREE.Vector3(0.15, 0.04, 0.03) }))
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.7, 8), topMat)
      torso.position.y = 1.05; torso.castShadow = true; g.add(torso)
      g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.06, 8), new THREE.MeshLambertMaterial({ color: 0xff1493 })), { position: new THREE.Vector3(0, 0.72, 0) }))
      const armGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.55, 8)
      const aL = new THREE.Mesh(armGeo, skinMat); aL.position.set(-0.38, 1.05, 0.1); aL.rotation.x = -0.3; g.add(aL)
      const aR = new THREE.Mesh(armGeo, skinMat); aR.position.set(0.38, 1.05, 0.15); aR.rotation.x = -0.5; g.add(aR)
      g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.12, 8), skinMat), { position: new THREE.Vector3(0, 1.46, 0) }))
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 10), skinMat)
      head.position.y = 1.72; head.castShadow = true; g.add(head)
      const hM = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), hairMat)
      hM.position.set(0, 1.78, -0.03); hM.scale.set(1, 0.9, 1.1); g.add(hM)
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.15), hairMat), { position: new THREE.Vector3(0, 1.88, 0.15) }))
      g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.08, 0.6, 8), hairMat), { position: new THREE.Vector3(0, 1.45, -0.2) }))
      const hsL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.35, 6), hairMat)
      hsL.position.set(-0.22, 1.55, 0); hsL.rotation.z = 0.15; g.add(hsL)
      const hsR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.35, 6), hairMat)
      hsR.position.set(0.22, 1.55, 0); hsR.rotation.z = -0.15; g.add(hsR)
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x2244aa })
      const ewMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const ewG = new THREE.SphereGeometry(0.055, 6, 6); const eG = new THREE.SphereGeometry(0.04, 6, 6)
      g.add(Object.assign(new THREE.Mesh(ewG, ewMat), { position: new THREE.Vector3(-0.09, 1.74, 0.2) }))
      g.add(Object.assign(new THREE.Mesh(eG, eyeMat), { position: new THREE.Vector3(-0.09, 1.74, 0.23) }))
      g.add(Object.assign(new THREE.Mesh(ewG, ewMat), { position: new THREE.Vector3(0.09, 1.74, 0.2) }))
      g.add(Object.assign(new THREE.Mesh(eG, eyeMat), { position: new THREE.Vector3(0.09, 1.74, 0.23) }))
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 0xff4466 })), { position: new THREE.Vector3(0, 1.64, 0.23) }))
      const gunG = new THREE.Group()
      gunG.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.4), new THREE.MeshLambertMaterial({ color: 0x222222 })))
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.25, 6), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }))
      b.rotation.x = Math.PI / 2; b.position.z = 0.3; gunG.add(b)
      gunG.position.set(0.38, 0.95, 0.35); gunG.rotation.x = -0.3; g.add(gunG)
      return g
    }

    // ===== CHARACTER: DASHA (cat) =====
    const createDasha = (): THREE.Group => {
      const g = new THREE.Group()
      const fD = new THREE.MeshLambertMaterial({ color: 0x3d2b1f })
      const fB = new THREE.MeshLambertMaterial({ color: 0x8b5e3c })
      const fL = new THREE.MeshLambertMaterial({ color: 0xc4956a })
      const fK = new THREE.MeshLambertMaterial({ color: 0x1a1a1a })
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.5, 8, 12), fB)
      body.position.y = 0.9; body.castShadow = true; g.add(body)
      const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), fD)
      p1.position.set(0.15, 1.0, 0.2); p1.scale.set(1, 1.5, 0.5); g.add(p1)
      const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), fK)
      p2.position.set(-0.18, 0.85, 0.15); p2.scale.set(1, 1.3, 0.5); g.add(p2)
      const ch = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), fL)
      ch.position.set(0, 0.75, 0.2); ch.scale.set(1, 1.2, 0.7); g.add(ch)
      const legGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.5, 8)
      const pawGeo = new THREE.SphereGeometry(0.08, 6, 6)
      const mk = (geo: THREE.BufferGeometry, mat: THREE.Material, x: number, y: number, z: number, sx=1, sy=1, sz=1) => {
        const m = new THREE.Mesh(geo, mat); m.position.set(x, y, z); m.scale.set(sx, sy, sz); m.castShadow = true; g.add(m); return m
      }
      mk(legGeo, fB, -0.15, 0.25, 0.1); mk(pawGeo, fD, -0.15, 0.04, 0.12, 1, 0.6, 1.2)
      mk(legGeo, fB, 0.15, 0.25, 0.1); mk(pawGeo, fD, 0.15, 0.04, 0.12, 1, 0.6, 1.2)
      const blg = new THREE.CylinderGeometry(0.08, 0.07, 0.5, 8)
      mk(blg, fB, -0.15, 0.25, -0.1); mk(pawGeo, fD, -0.15, 0.04, -0.1, 1, 0.6, 1.2)
      mk(blg, fB, 0.15, 0.25, -0.1); mk(pawGeo, fD, 0.15, 0.04, -0.1, 1, 0.6, 1.2)
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), fB)
      head.position.y = 1.5; head.scale.set(1, 0.9, 0.95); head.castShadow = true; g.add(head)
      const hm = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), fD)
      hm.position.set(0, 1.6, -0.1); hm.scale.set(1.2, 0.8, 0.8); g.add(hm)
      const mz = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), fL)
      mz.position.set(0, 1.42, 0.2); mz.scale.set(1.2, 0.8, 0.8); g.add(mz)
      g.add(Object.assign(new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), new THREE.MeshLambertMaterial({ color: 0xff8888 })), { position: new THREE.Vector3(0, 1.46, 0.28) }))
      const ewMat = new THREE.MeshBasicMaterial({ color: 0xeeffee })
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x44cc44 })
      const pupMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
      mk(new THREE.SphereGeometry(0.07, 8, 6), ewMat, -0.12, 1.54, 0.2)
      mk(new THREE.SphereGeometry(0.06, 8, 6), eyeMat, -0.12, 1.54, 0.24)
      const pl = mk(new THREE.SphereGeometry(0.03, 6, 6), pupMat, -0.12, 1.54, 0.27, 0.5, 1, 0.5)
      mk(new THREE.SphereGeometry(0.07, 8, 6), ewMat, 0.12, 1.54, 0.2)
      mk(new THREE.SphereGeometry(0.06, 8, 6), eyeMat, 0.12, 1.54, 0.24)
      mk(new THREE.SphereGeometry(0.03, 6, 6), pupMat, 0.12, 1.54, 0.27, 0.5, 1, 0.5)
      const earGeo = new THREE.ConeGeometry(0.1, 0.22, 4)
      const eL = new THREE.Mesh(earGeo, fB); eL.position.set(-0.16, 1.78, 0.02); eL.rotation.z = 0.2; g.add(eL)
      const eR = new THREE.Mesh(earGeo, fB); eR.position.set(0.16, 1.78, 0.02); eR.rotation.z = -0.2; g.add(eR)
      const ieMat = new THREE.MeshLambertMaterial({ color: 0xffaaaa })
      const ieGeo = new THREE.ConeGeometry(0.05, 0.12, 4)
      const ie1 = new THREE.Mesh(ieGeo, ieMat); ie1.position.set(-0.16, 1.76, 0.05); ie1.rotation.z = 0.2; g.add(ie1)
      const ie2 = new THREE.Mesh(ieGeo, ieMat); ie2.position.set(0.16, 1.76, 0.05); ie2.rotation.z = -0.2; g.add(ie2)
      const wMat = new THREE.MeshBasicMaterial({ color: 0xcccccc })
      const wGeo = new THREE.CylinderGeometry(0.003, 0.002, 0.2, 4)
      for (let s = -1; s <= 1; s += 2) for (let i = 0; i < 3; i++) {
        const w = new THREE.Mesh(wGeo, wMat); w.position.set(s * 0.15, 1.43 + i * 0.03, 0.25)
        w.rotation.z = Math.PI / 2 + s * (0.1 + i * 0.1); g.add(w)
      }
      for (let i = 0; i < 8; i++) {
        const t = i / 8; const seg = new THREE.Mesh(new THREE.SphereGeometry(0.05 - t * 0.02, 6, 6), i % 2 === 0 ? fB : fD)
        const a = t * Math.PI * 0.6; seg.position.set(Math.sin(a) * 0.1, 0.8 + t * 0.8, -0.3 - Math.cos(a) * 0.3); g.add(seg)
      }
      const str = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.3), fK); str.position.set(0, 1.0, -0.15); g.add(str)
      const gunG = new THREE.Group()
      gunG.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.35), new THREE.MeshLambertMaterial({ color: 0x222222 })))
      const br = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 6), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }))
      br.rotation.x = Math.PI / 2; br.position.z = 0.25; gunG.add(br)
      gunG.position.set(0, 0.85, 0.35); gunG.rotation.x = -0.2; g.add(gunG)
      return g
    }

    // ===== CHARACTER: AIDAR =====
    const createAidar = (): THREE.Group => {
      const g = new THREE.Group()
      const skinMat = new THREE.MeshLambertMaterial({ color: 0xe8c39e })
      const hoodieMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a }) // чёрное худи
      const pantsMat = new THREE.MeshLambertMaterial({ color: 0x111111 }) // широкие чёрные штаны
      const hairMat = new THREE.MeshLambertMaterial({ color: 0x5c3a1e }) // коричневые волосы
      const shoeMat = new THREE.MeshLambertMaterial({ color: 0x222222 })

      // Широкие чёрные штаны (baggy pants)
      const pantsGeo = new THREE.CylinderGeometry(0.2, 0.22, 0.75, 8)
      const pantsL = new THREE.Mesh(pantsGeo, pantsMat); pantsL.position.set(-0.15, 0.38, 0); pantsL.castShadow = true; g.add(pantsL)
      const pantsR = new THREE.Mesh(pantsGeo, pantsMat); pantsR.position.set(0.15, 0.38, 0); pantsR.castShadow = true; g.add(pantsR)
      
      // Кроссовки
      const shoeGeo = new THREE.BoxGeometry(0.16, 0.1, 0.26)
      g.add(Object.assign(new THREE.Mesh(shoeGeo, shoeMat), { position: new THREE.Vector3(-0.15, 0.05, 0.03) }))
      g.add(Object.assign(new THREE.Mesh(shoeGeo, shoeMat), { position: new THREE.Vector3(0.15, 0.05, 0.03) }))
      // Белая подошва
      const soleMat = new THREE.MeshLambertMaterial({ color: 0xeeeeee })
      const soleGeo = new THREE.BoxGeometry(0.17, 0.03, 0.27)
      g.add(Object.assign(new THREE.Mesh(soleGeo, soleMat), { position: new THREE.Vector3(-0.15, 0.015, 0.03) }))
      g.add(Object.assign(new THREE.Mesh(soleGeo, soleMat), { position: new THREE.Vector3(0.15, 0.015, 0.03) }))

      // Чёрное худи (oversized)
      const hoodieGeo = new THREE.CylinderGeometry(0.35, 0.38, 0.8, 8)
      const hoodie = new THREE.Mesh(hoodieGeo, hoodieMat)
      hoodie.position.y = 1.1; hoodie.castShadow = true; g.add(hoodie)
      
      // Карман на худи (кенгуру)
      const pocketMat = new THREE.MeshLambertMaterial({ color: 0x252525 })
      const pocket = new THREE.Mesh(new THREE.BoxGeometry(0.35, 0.15, 0.05), pocketMat)
      pocket.position.set(0, 0.85, 0.33); g.add(pocket)

      // Капюшон (сзади)
      const hoodGeo = new THREE.SphereGeometry(0.22, 8, 6, 0, Math.PI * 2, 0, Math.PI / 2)
      const hood = new THREE.Mesh(hoodGeo, hoodieMat)
      hood.position.set(0, 1.5, -0.15); hood.rotation.x = 0.3; g.add(hood)

      // Руки в худи (длинные рукава)
      const armGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.6, 8)
      const armL = new THREE.Mesh(armGeo, hoodieMat); armL.position.set(-0.4, 1.05, 0.1); armL.rotation.x = -0.3; armL.rotation.z = 0.15; g.add(armL)
      const armR = new THREE.Mesh(armGeo, hoodieMat); armR.position.set(0.4, 1.05, 0.15); armR.rotation.x = -0.5; armR.rotation.z = -0.15; g.add(armR)
      
      // Кисти рук (выглядывают из рукавов)
      const handGeo = new THREE.SphereGeometry(0.05, 6, 6)
      g.add(Object.assign(new THREE.Mesh(handGeo, skinMat), { position: new THREE.Vector3(-0.42, 0.78, 0.2) }))
      g.add(Object.assign(new THREE.Mesh(handGeo, skinMat), { position: new THREE.Vector3(0.42, 0.78, 0.3) }))

      // Шея
      g.add(Object.assign(new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.1, 8), skinMat), { position: new THREE.Vector3(0, 1.55, 0) }))

      // Голова
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.24, 12, 10), skinMat)
      head.position.y = 1.75; head.castShadow = true; g.add(head)

      // Волнистые коричневые волосы
      // Основная масса волос
      const hairMain = new THREE.Mesh(new THREE.SphereGeometry(0.27, 10, 8), hairMat)
      hairMain.position.set(0, 1.82, -0.02); hairMain.scale.set(1.05, 0.85, 1.05); g.add(hairMain)
      
      // Волнистые пряди (несколько сфер для эффекта волн)
      const waveGeo = new THREE.SphereGeometry(0.08, 6, 6)
      const waves = [
        [-0.18, 1.88, 0.1], [0.0, 1.92, 0.08], [0.18, 1.88, 0.1],
        [-0.22, 1.78, -0.08], [0.22, 1.78, -0.08],
        [-0.15, 1.7, -0.15], [0.15, 1.7, -0.15],
        [0.0, 1.72, -0.18], [-0.1, 1.85, 0.15], [0.1, 1.85, 0.15],
      ]
      waves.forEach(([x, y, z]) => {
        const w = new THREE.Mesh(waveGeo, hairMat)
        w.position.set(x, y, z)
        w.scale.set(1, 0.7, 1)
        g.add(w)
      })

      // Чёлка (волнистая)
      const bangGeo = new THREE.SphereGeometry(0.06, 6, 6)
      for (let i = -2; i <= 2; i++) {
        const bang = new THREE.Mesh(bangGeo, hairMat)
        bang.position.set(i * 0.06, 1.88, 0.18)
        bang.scale.set(1, 0.6, 0.8)
        g.add(bang)
      }

      // Глаза
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x4a3520 })
      const ewMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const ewG = new THREE.SphereGeometry(0.05, 6, 6); const eG = new THREE.SphereGeometry(0.035, 6, 6)
      g.add(Object.assign(new THREE.Mesh(ewG, ewMat), { position: new THREE.Vector3(-0.09, 1.77, 0.2) }))
      g.add(Object.assign(new THREE.Mesh(eG, eyeMat), { position: new THREE.Vector3(-0.09, 1.77, 0.23) }))
      g.add(Object.assign(new THREE.Mesh(ewG, ewMat), { position: new THREE.Vector3(0.09, 1.77, 0.2) }))
      g.add(Object.assign(new THREE.Mesh(eG, eyeMat), { position: new THREE.Vector3(0.09, 1.77, 0.23) }))

      // Брови
      const browMat = new THREE.MeshBasicMaterial({ color: 0x3d2510 })
      const browGeo = new THREE.BoxGeometry(0.08, 0.015, 0.02)
      g.add(Object.assign(new THREE.Mesh(browGeo, browMat), { position: new THREE.Vector3(-0.09, 1.82, 0.22) }))
      g.add(Object.assign(new THREE.Mesh(browGeo, browMat), { position: new THREE.Vector3(0.09, 1.82, 0.22) }))

      // Рот
      g.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.07, 0.015, 0.02), new THREE.MeshBasicMaterial({ color: 0xcc6666 })), { position: new THREE.Vector3(0, 1.68, 0.22) }))

      // Оружие
      const gunG = new THREE.Group()
      gunG.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.45), new THREE.MeshLambertMaterial({ color: 0x222222 })))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.25, 6), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }))
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.32; gunG.add(barrel)
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.1, 0.04), new THREE.MeshLambertMaterial({ color: 0x333333 }))
      mag.position.set(0, -0.07, 0.05); mag.rotation.x = 0.15; gunG.add(mag)
      gunG.position.set(0.42, 0.88, 0.35); gunG.rotation.x = -0.3; g.add(gunG)

      return g
    }

    const createCharacter = (type: Character | 'aidar') => {
      if (type === 'lisa') return createLisa()
      if (type === 'dasha') return createDasha()
      return createAidar()
    }

    // Player model
    const playerModel = createCharacter(playerCharacter)
    playerModel.position.set(-40, 0, -40)
    scene.add(playerModel)

    // Bot 1 - opposite character
    const bot1Model = createCharacter(bot1Character)
    bot1Model.position.set(40, 0, 40)
    scene.add(bot1Model)

    // Bot 2 - Aidar
    const bot2Model = createAidar()
    bot2Model.position.set(40, 0, -40)
    scene.add(bot2Model)

    // ===== FIRST PERSON WEAPON =====
    const fpWeapon = new THREE.Group()
    const fpGunMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a })
    if (playerWeapon === 'ak') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.5), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 6), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.35; fpWeapon.add(barrel)
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.12, 0.04), new THREE.MeshLambertMaterial({ color: 0x333333 }))
      mag.position.set(0, -0.08, 0.05); mag.rotation.x = 0.2; fpWeapon.add(mag)
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.15), new THREE.MeshLambertMaterial({ color: 0x654321 })), { position: new THREE.Vector3(0, 0, -0.3) }))
    } else if (playerWeapon === 'shotgun') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.55), fpGunMat))
      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.35, 8), fpGunMat)
      b1.rotation.x = Math.PI / 2; b1.position.set(-0.015, 0.01, 0.4); fpWeapon.add(b1)
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.35, 8), fpGunMat)
      b2.rotation.x = Math.PI / 2; b2.position.set(0.015, 0.01, 0.4); fpWeapon.add(b2)
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.12), new THREE.MeshLambertMaterial({ color: 0x654321 })), { position: new THREE.Vector3(0, -0.04, 0.15) }))
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.2), new THREE.MeshLambertMaterial({ color: 0x8b4513 })), { position: new THREE.Vector3(0, 0, -0.35) }))
    } else if (playerWeapon === 'pistol') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.04, 0.2), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.08, 6), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.12; fpWeapon.add(barrel)
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.04), new THREE.MeshLambertMaterial({ color: 0x4a3728 })), { position: new THREE.Vector3(0, -0.05, -0.05) }))
    } else if (playerWeapon === 'sniper') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.7), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.4, 8), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.5; fpWeapon.add(barrel)
      const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.15, 8), new THREE.MeshLambertMaterial({ color: 0x333333 }))
      scope.rotation.x = Math.PI / 2; scope.position.set(0, 0.05, 0.1); fpWeapon.add(scope)
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.CircleGeometry(0.024, 8), new THREE.MeshBasicMaterial({ color: 0x4488ff })), { position: new THREE.Vector3(0, 0.05, 0.18) }))
      fpWeapon.add(Object.assign(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.07, 0.2), new THREE.MeshLambertMaterial({ color: 0x654321 })), { position: new THREE.Vector3(0, 0, -0.4) }))
    }
    fpWeapon.position.set(0.25, -0.2, -0.4)
    camera.add(fpWeapon)
    scene.add(camera)

    // Muzzle flash
    const flashMat = new THREE.MeshBasicMaterial({ color: 0xffff00, transparent: true, opacity: 0 })
    const muzzleFlash = new THREE.Mesh(new THREE.SphereGeometry(0.06, 6, 6), flashMat)
    muzzleFlash.position.set(0.25, -0.18, -0.75)
    camera.add(muzzleFlash)

    // ===== GAME STATE =====
    const state = {
      bullets: [] as Bullet[],
      keys: {} as Record<string, boolean>,
      yaw: Math.PI * 0.75,
      pitch: 0,
      lastShot: 0,
      playerHP: playerMaxHP,
      isReloading: false,
      reloadStart: 0,
      playerPos: new THREE.Vector3(-40, 0, -40),
      bot1Pos: new THREE.Vector3(40, 0, 40),
      bot2Pos: new THREE.Vector3(40, 0, -40),
      bot1HP: bot1MaxHP,
      bot2HP: 100,
      bot1LastShot: 0,
      bot2LastShot: 0,
      bot1StrafeDir: 1,
      bot1StrafeTimer: 0,
      bot2StrafeDir: 1,
      bot2StrafeTimer: 0,
      gameOver: false,
      weaponBob: 0,
      recoilOffset: 0,
      isMouseDown: false,
      isLocked: false,
      ammo: maxAmmo,
      maxAmmo: maxAmmo,
    }

    // ===== COLLISION =====
    const checkCollision = (pos: THREE.Vector3, radius: number): boolean => {
      for (const obs of obstacles) {
        const cx = Math.max(obs.min.x, Math.min(pos.x, obs.max.x))
        const cz = Math.max(obs.min.z, Math.min(pos.z, obs.max.z))
        const dx = pos.x - cx, dz = pos.z - cz
        if (dx * dx + dz * dz < radius * radius) return true
      }
      return false
    }

    // ===== INPUT =====
    const onKeyDown = (e: KeyboardEvent) => {
      state.keys[e.key.toLowerCase()] = true
      if (e.key.toLowerCase() === 'r' && !state.isReloading && state.ammo < state.maxAmmo) {
        state.isReloading = true
        state.reloadStart = Date.now()
        setIsReloading(true)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => { state.keys[e.key.toLowerCase()] = false }

    // Mouse look - uses Pointer Lock API correctly
    const onMouseMove = (e: MouseEvent) => {
      if (!state.isLocked || state.gameOver) return
      state.yaw -= e.movementX * 0.002
      state.pitch -= e.movementY * 0.002
      state.pitch = Math.max(-1.2, Math.min(1.2, state.pitch))
    }

    // Shooting - SEPARATE from pointer lock request
    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0 && !state.gameOver) {
        state.isMouseDown = true
        playerShoot()
      }
    }
    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 0) state.isMouseDown = false
    }

    // Pointer lock - only requested on explicit canvas click
    const onPointerLockChange = () => {
      state.isLocked = document.pointerLockElement === renderer.domElement
      setNeedsLock(!state.isLocked)
    }

    const requestLock = () => {
      renderer.domElement.requestPointerLock()
    }

    const onContextMenu = (e: Event) => e.preventDefault()

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('pointerlockchange', onPointerLockChange)
    renderer.domElement.addEventListener('contextmenu', onContextMenu)

    // ===== SHOOTING =====
    function playerShoot() {
      if (state.gameOver || !state.isLocked) return
      const now = Date.now()
      if (state.isReloading) return
      if (state.ammo <= 0) {
        state.isReloading = true; state.reloadStart = now; setIsReloading(true); return
      }
      if (now - state.lastShot < weaponStats.fireRate) return
      state.lastShot = now
      state.ammo--; setAmmo(state.ammo)
      state.recoilOffset = playerWeapon === 'sniper' ? 0.12 : playerWeapon === 'shotgun' ? 0.08 : 0.04
      state.pitch += playerWeapon === 'sniper' ? 0.025 : playerWeapon === 'shotgun' ? 0.015 : 0.005
      flashMat.opacity = 1

      const dir = new THREE.Vector3(0, 0, -1).applyQuaternion(camera.quaternion)
      for (let i = 0; i < weaponStats.bulletsPerShot; i++) {
        const bullet = new THREE.Mesh(
          new THREE.SphereGeometry(playerWeapon === 'sniper' ? 0.03 : 0.04, 4, 4),
          new THREE.MeshBasicMaterial({ color: playerWeapon === 'sniper' ? 0x44ffff : 0xffff44 })
        )
        bullet.position.copy(state.playerPos); bullet.position.y += 1.6
        const vel = dir.clone()
        vel.x += (Math.random() - 0.5) * weaponStats.spread
        vel.y += (Math.random() - 0.5) * weaponStats.spread
        vel.z += (Math.random() - 0.5) * weaponStats.spread
        vel.normalize().multiplyScalar(playerWeapon === 'sniper' ? 4 : 2.5)
        scene.add(bullet)
        state.bullets.push({ mesh: bullet, velocity: vel, life: 80, ownerId: 'player', damage: weaponStats.damage })
      }
    }

    function botShoot(botId: string, botPos: THREE.Vector3, targetPos: THREE.Vector3) {
      if (state.gameOver) return
      const now = Date.now()
      const lastShotKey = botId === 'bot1' ? 'bot1LastShot' : 'bot2LastShot'
      if (now - state[lastShotKey] < weaponStats.fireRate * 2.2) return
      state[lastShotKey] = now

      const toTarget = new THREE.Vector3().subVectors(
        new THREE.Vector3(targetPos.x, targetPos.y + 1.2, targetPos.z),
        new THREE.Vector3(botPos.x, botPos.y + 1.2, botPos.z)
      ).normalize()

      for (let i = 0; i < weaponStats.bulletsPerShot; i++) {
        const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4),
          new THREE.MeshBasicMaterial({ color: botId === 'bot1' ? 0xff6644 : 0xff44ff }))
        bullet.position.copy(botPos); bullet.position.y += 1.2
        const vel = toTarget.clone()
        vel.x += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.y += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.z += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.normalize().multiplyScalar(2)
        scene.add(bullet)
        state.bullets.push({ mesh: bullet, velocity: vel, life: 80, ownerId: botId, damage: weaponStats.damage })
      }
    }

    // ===== BOT AI =====
    function updateBot1(botPos: THREE.Vector3, botSpeed: number) {
      const targets: { pos: THREE.Vector3; id: string }[] = [
        { pos: state.playerPos, id: 'player' },
      ]
      if (state.bot2HP > 0) targets.push({ pos: state.bot2Pos, id: 'bot2' })

      let closestTarget = targets[0]
      let closestDist = Infinity
      for (const t of targets) {
        const d = botPos.distanceTo(t.pos)
        if (d < closestDist) { closestDist = d; closestTarget = t }
      }
      if (closestDist > 80) return

      const toTarget = new THREE.Vector3().subVectors(closestTarget.pos, botPos)
      const dist = toTarget.length()
      const idealDist = 18

      state.bot1StrafeTimer += 0.016
      if (state.bot1StrafeTimer > 2 + Math.random() * 2) {
        state.bot1StrafeDir *= -1
        state.bot1StrafeTimer = 0
      }

      const botMove = new THREE.Vector3()
      if (dist > idealDist + 8) botMove.add(toTarget.clone().normalize().multiplyScalar(0.7))
      else if (dist < idealDist - 8) botMove.add(toTarget.clone().normalize().multiplyScalar(-0.5))
      const strafe = new THREE.Vector3(-toTarget.z, 0, toTarget.x).normalize()
      botMove.add(strafe.multiplyScalar(state.bot1StrafeDir * 0.4))

      if (botMove.length() > 0) {
        botMove.normalize()
        const newPos = botPos.clone().add(botMove.multiplyScalar(botSpeed * 0.016))
        newPos.x = Math.max(-85, Math.min(85, newPos.x))
        newPos.z = Math.max(-85, Math.min(85, newPos.z))
        if (!checkCollision(newPos, 0.6)) botPos.copy(newPos)
      }
      if (dist < 55 && dist > 3) botShoot('bot1', botPos, closestTarget.pos)
    }

    function updateBot2(botPos: THREE.Vector3, botSpeed: number) {
      const targets: { pos: THREE.Vector3; id: string }[] = [
        { pos: state.playerPos, id: 'player' },
      ]
      if (state.bot1HP > 0) targets.push({ pos: state.bot1Pos, id: 'bot1' })

      let closestTarget = targets[0]
      let closestDist = Infinity
      for (const t of targets) {
        const d = botPos.distanceTo(t.pos)
        if (d < closestDist) { closestDist = d; closestTarget = t }
      }
      if (closestDist > 80) return

      const toTarget = new THREE.Vector3().subVectors(closestTarget.pos, botPos)
      const dist = toTarget.length()
      const idealDist = 18

      state.bot2StrafeTimer += 0.016
      if (state.bot2StrafeTimer > 2 + Math.random() * 2) {
        state.bot2StrafeDir *= -1
        state.bot2StrafeTimer = 0
      }

      const botMove = new THREE.Vector3()
      if (dist > idealDist + 8) botMove.add(toTarget.clone().normalize().multiplyScalar(0.7))
      else if (dist < idealDist - 8) botMove.add(toTarget.clone().normalize().multiplyScalar(-0.5))
      const strafe = new THREE.Vector3(-toTarget.z, 0, toTarget.x).normalize()
      botMove.add(strafe.multiplyScalar(state.bot2StrafeDir * 0.4))

      if (botMove.length() > 0) {
        botMove.normalize()
        const newPos = botPos.clone().add(botMove.multiplyScalar(botSpeed * 0.016))
        newPos.x = Math.max(-85, Math.min(85, newPos.x))
        newPos.z = Math.max(-85, Math.min(85, newPos.z))
        if (!checkCollision(newPos, 0.6)) botPos.copy(newPos)
      }
      if (dist < 55 && dist > 3) botShoot('bot2', botPos, closestTarget.pos)
    }

    // ===== GAME LOOP =====
    let prevTime = 0
    let animId = 0

    const gameLoop = (time: number) => {
      animId = requestAnimationFrame(gameLoop)
      const dt = Math.min((time - prevTime) / 1000, 0.05)
      prevTime = time

      if (state.gameOver) { renderer.render(scene, camera); return }

      // Auto-fire for automatic weapons
      if (state.isMouseDown && state.isLocked && playerWeapon === 'ak') playerShoot()

      // Reload
      if (state.isReloading && Date.now() - state.reloadStart > 2000) {
        state.isReloading = false; state.ammo = state.maxAmmo; setIsReloading(false); setAmmo(state.maxAmmo)
      }

      // ===== PLAYER MOVEMENT =====
      const forward = new THREE.Vector3(0, 0, -1).applyAxisAngle(new THREE.Vector3(0, 1, 0), state.yaw)
      forward.y = 0; forward.normalize()
      const right = new THREE.Vector3(1, 0, 0).applyAxisAngle(new THREE.Vector3(0, 1, 0), state.yaw)
      right.y = 0; right.normalize()

      const moveDir = new THREE.Vector3()
      let isMoving = false
      if (state.keys['w'] || state.keys['ц']) { moveDir.add(forward); isMoving = true }
      if (state.keys['s'] || state.keys['ы']) { moveDir.sub(forward); isMoving = true }
      if (state.keys['d'] || state.keys['в']) { moveDir.add(right); isMoving = true }
      if (state.keys['a'] || state.keys['ф']) { moveDir.sub(right); isMoving = true }

      if (isMoving && moveDir.length() > 0) {
        moveDir.normalize()
        const newPos = state.playerPos.clone().add(moveDir.multiplyScalar(playerSpeed * dt))
        newPos.x = Math.max(-85, Math.min(85, newPos.x))
        newPos.z = Math.max(-85, Math.min(85, newPos.z))
        if (!checkCollision(newPos, 0.6)) state.playerPos.copy(newPos)
        else {
          const sX = state.playerPos.clone(); sX.x = newPos.x
          if (!checkCollision(sX, 0.6)) state.playerPos.x = newPos.x
          const sZ = state.playerPos.clone(); sZ.z = newPos.z
          if (!checkCollision(sZ, 0.6)) state.playerPos.z = newPos.z
        }
        state.weaponBob += dt * 8
      }

      playerModel.position.copy(state.playerPos)
      playerModel.rotation.y = state.yaw

      // Camera
      camera.position.set(state.playerPos.x, state.playerPos.y + 1.7, state.playerPos.z)
      camera.rotation.order = 'YXZ'
      camera.rotation.y = state.yaw
      camera.rotation.x = state.pitch

      // Weapon bob & recoil
      const bobX = isMoving ? Math.sin(state.weaponBob) * 0.01 : 0
      const bobY = isMoving ? Math.abs(Math.cos(state.weaponBob)) * 0.008 : 0
      fpWeapon.position.set(0.25 + bobX, -0.2 + bobY, -0.4 + state.recoilOffset)
      state.recoilOffset *= 0.88
      if (flashMat.opacity > 0) { flashMat.opacity -= dt * 15; if (flashMat.opacity < 0) flashMat.opacity = 0 }

      // ===== BOT 1 AI =====
      if (state.bot1HP > 0) {
        const bot1Speed = bot1Character === 'lisa' ? 7 : 11
        updateBot1(state.bot1Pos, bot1Speed)
        bot1Model.position.copy(state.bot1Pos)
        const t1 = state.playerPos.distanceTo(state.bot1Pos) < (state.bot2HP > 0 ? state.bot2Pos.distanceTo(state.bot1Pos) : Infinity)
          ? state.playerPos : state.bot2Pos
        bot1Model.rotation.y = Math.atan2(t1.x - state.bot1Pos.x, t1.z - state.bot1Pos.z)
      }

      // ===== BOT 2 (AIDAR) AI =====
      if (state.bot2HP > 0) {
        updateBot2(state.bot2Pos, 9)
        bot2Model.position.copy(state.bot2Pos)
        const t2 = state.playerPos.distanceTo(state.bot2Pos) < (state.bot1HP > 0 ? state.bot1Pos.distanceTo(state.bot2Pos) : Infinity)
          ? state.playerPos : state.bot1Pos
        bot2Model.rotation.y = Math.atan2(t2.x - state.bot2Pos.x, t2.z - state.bot2Pos.z)
      }

      // ===== BULLETS =====
      for (let i = state.bullets.length - 1; i >= 0; i--) {
        const b = state.bullets[i]
        b.mesh.position.add(b.velocity)
        b.life--
        if (b.life <= 0) { scene.remove(b.mesh); state.bullets.splice(i, 1); continue }

        // Check hits on all entities
        const hitTargets: { pos: THREE.Vector3; id: string }[] = [
          { pos: new THREE.Vector3(state.playerPos.x, state.playerPos.y + 1.2, state.playerPos.z), id: 'player' },
          { pos: new THREE.Vector3(state.bot1Pos.x, state.bot1Pos.y + 1.2, state.bot1Pos.z), id: 'bot1' },
          { pos: new THREE.Vector3(state.bot2Pos.x, state.bot2Pos.y + 1.2, state.bot2Pos.z), id: 'bot2' },
        ]

        let hit = false
        for (const target of hitTargets) {
          if (b.ownerId === target.id) continue // can't hit self
          if (target.id === 'bot1' && state.bot1HP <= 0) continue
          if (target.id === 'bot2' && state.bot2HP <= 0) continue

          if (b.mesh.position.distanceTo(target.pos) < 1.0) {
            if (target.id === 'player') {
              state.playerHP -= b.damage
              setPlayerHP(Math.max(0, state.playerHP))
              showDamageFlash()
              if (state.playerHP <= 0) { state.gameOver = true; setGameOver('lose'); document.exitPointerLock() }
            } else if (target.id === 'bot1') {
              state.bot1HP -= b.damage
              setBot1HP(Math.max(0, state.bot1HP))
              if (b.ownerId === 'player') showHitMarker()
              if (state.bot1HP <= 0 && b.ownerId === 'player') setKillCount(c => c + 1)
            } else if (target.id === 'bot2') {
              state.bot2HP -= b.damage
              setBot2HP(Math.max(0, state.bot2HP))
              if (b.ownerId === 'player') showHitMarker()
              if (state.bot2HP <= 0 && b.ownerId === 'player') setKillCount(c => c + 1)
            }
            scene.remove(b.mesh); state.bullets.splice(i, 1)
            hit = true
            break
          }
        }
        if (hit) continue
      }

      // Win condition: both bots dead
      if (state.bot1HP <= 0 && state.bot2HP <= 0 && !state.gameOver) {
        state.gameOver = true; setGameOver('win'); document.exitPointerLock()
      }

      renderer.render(scene, camera)
    }

    animId = requestAnimationFrame(gameLoop)

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keyup', onKeyUp)
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('mousedown', onMouseDown)
      document.removeEventListener('mouseup', onMouseUp)
      document.removeEventListener('pointerlockchange', onPointerLockChange)
      window.removeEventListener('resize', onResize)
      renderer.domElement.removeEventListener('contextmenu', onContextMenu)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  const bot1Name = bot1Character === 'lisa' ? 'Лиза' : 'Даша'
  const bot1Emoji = bot1Character === 'lisa' ? '👧' : '🐱'

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      <div ref={containerRef} className="w-full h-full" style={{ cursor: needsLock ? 'pointer' : 'none' }} />

      {/* Crosshair */}
      {!needsLock && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <div className="relative w-8 h-8">
            <div className="absolute top-1/2 left-0 w-full h-[2px] -translate-y-1/2">
              <div className="absolute left-0 w-2 h-[2px] bg-white/90"></div>
              <div className="absolute right-0 w-2 h-[2px] bg-white/90"></div>
            </div>
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2">
              <div className="absolute top-0 w-[2px] h-2 bg-white/90"></div>
              <div className="absolute bottom-0 w-[2px] h-2 bg-white/90"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-1 h-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"></div>
          </div>
        </div>
      )}

      {/* Hit Marker */}
      {hitMarker && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <svg width="30" height="30" viewBox="0 0 30 30">
            <line x1="8" y1="8" x2="13" y2="13" stroke="white" strokeWidth="2"/>
            <line x1="22" y1="8" x2="17" y2="13" stroke="white" strokeWidth="2"/>
            <line x1="8" y1="22" x2="13" y2="17" stroke="white" strokeWidth="2"/>
            <line x1="22" y1="22" x2="17" y2="17" stroke="white" strokeWidth="2"/>
          </svg>
        </div>
      )}

      {/* Damage Flash */}
      {damageFlash && (
        <div className="absolute inset-0 pointer-events-none z-20">
          <div className="w-full h-full border-[12px] border-red-500/60"></div>
        </div>
      )}

      {/* Player HUD */}
      <div className="absolute bottom-6 left-6 pointer-events-none z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{playerCharacter === 'lisa' ? '👧' : '🐱'}</span>
            <div>
              <div className="text-white font-bold text-sm">{playerCharacter === 'lisa' ? 'Лиза' : 'Даша'}</div>
              <div className="text-xs text-gray-400">ВЫ</div>
            </div>
          </div>
          <div className="w-44 h-3 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-300" style={{
              width: `${(playerHP / playerMaxHP) * 100}%`,
              background: playerHP > 50 ? 'linear-gradient(90deg, #22c55e, #4ade80)' : playerHP > 25 ? 'linear-gradient(90deg, #eab308, #facc15)' : 'linear-gradient(90deg, #ef4444, #f87171)',
            }} />
          </div>
          <div className="text-white text-xs mt-1 font-mono">❤️ {Math.max(0, playerHP)} / {playerMaxHP}</div>
        </div>
      </div>

      {/* Bot 1 HUD */}
      <div className="absolute top-6 right-6 pointer-events-none z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-3 border border-white/10 mb-2">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">{bot1Emoji}</span>
            <div>
              <div className="text-white font-bold text-sm">{bot1Name}</div>
              <div className="text-xs text-red-400">БОТ 1</div>
            </div>
          </div>
          <div className="w-36 h-2.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300" style={{ width: `${(bot1HP / bot1MaxHP) * 100}%` }} />
          </div>
          <div className="text-white text-xs mt-1 font-mono">❤️ {Math.max(0, bot1HP)} / {bot1MaxHP}</div>
        </div>
        {/* Bot 2 - Aidar */}
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-3 border border-white/10">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xl">🧑</span>
            <div>
              <div className="text-white font-bold text-sm">Айдар</div>
              <div className="text-xs text-purple-400">БОТ 2</div>
            </div>
          </div>
          <div className="w-36 h-2.5 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-purple-600 to-purple-400 rounded-full transition-all duration-300" style={{ width: `${bot2HP}%` }} />
          </div>
          <div className="text-white text-xs mt-1 font-mono">❤️ {Math.max(0, bot2HP)} / 100</div>
        </div>
      </div>

      {/* Weapon & Ammo */}
      <div className="absolute bottom-6 right-6 pointer-events-none z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-right">
          <div className="text-white font-bold text-lg flex items-center justify-end gap-2">
            <span>{weaponStats.emoji}</span>
            <span>{weaponStats.name}</span>
          </div>
          <div className="text-2xl font-mono font-bold mt-1" style={{ color: ammo > 10 ? '#4ade80' : ammo > 0 ? '#facc15' : '#ef4444' }}>
            {isReloading ? (
              <span className="text-yellow-400 animate-pulse text-lg">⟳ Перезарядка...</span>
            ) : (
              <>{ammo} <span className="text-gray-500 text-base">/ {maxAmmo}</span></>
            )}
          </div>
          <div className="text-xs text-gray-400 mt-1">R — перезарядка</div>
          {playerWeapon === 'ak' && <div className="text-xs text-green-400 mt-1">⚡ Автоматический</div>}
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 pointer-events-none z-10">
        <div className="bg-black/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/10">
          <div className="flex gap-4 text-xs text-gray-300">
            <span><kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-white">WASD</kbd> Движение</span>
            <span><kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-white">Мышь</kbd> Камера</span>
            <span><kbd className="bg-gray-700 px-1.5 py-0.5 rounded text-white">ЛКМ</kbd> Стрельба</span>
          </div>
        </div>
      </div>

      {/* Back button */}
      <button onClick={() => { document.exitPointerLock(); onBackToMenu() }}
        className="absolute top-6 left-6 px-4 py-2 bg-black/70 backdrop-blur-sm text-white rounded-lg hover:bg-red-600 transition-colors z-30 border border-white/10 text-sm">
        ← Меню
      </button>

      {/* Pointer Lock overlay */}
      {needsLock && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-40 cursor-pointer"
          onClick={() => containerRef.current?.querySelector('canvas')?.requestPointerLock()}>
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4">🎮 Готов к бою!</h3>
            <p className="text-gray-300 mb-1">Вы: {playerCharacter === 'lisa' ? '👧 Лиза' : '🐱 Даша'}</p>
            <p className="text-gray-300 mb-1">Противники: {bot1Emoji} {bot1Name} + 🧑 Айдар</p>
            <p className="text-gray-300 mb-4">Оружие: {weaponStats.emoji} {weaponStats.name}</p>
            <p className="text-yellow-400 text-lg animate-pulse">👆 Кликните чтобы начать</p>
            <p className="text-gray-500 text-xs mt-3">Мышь будет захвачена для управления камерой</p>
            <p className="text-gray-500 text-xs">Нажмите ESC чтобы освободить мышь</p>
          </div>
        </div>
      )}

      {/* Game Over */}
      {gameOver && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/80 z-50">
          <div className="text-center">
            {gameOver === 'win' ? (
              <>
                <div className="text-8xl mb-4">🏆</div>
                <h2 className="text-5xl font-bold text-green-400 mb-2">ПОБЕДА!</h2>
                <p className="text-xl text-gray-300 mb-2">Вы победили всех противников!</p>
              </>
            ) : (
              <>
                <div className="text-8xl mb-4">💀</div>
                <h2 className="text-5xl font-bold text-red-400 mb-2">ПОРАЖЕНИЕ</h2>
                <p className="text-xl text-gray-300 mb-2">Вас уничтожили!</p>
              </>
            )}
            <p className="text-gray-400 mb-8">Убийств: {killCount}</p>
            <button onClick={onBackToMenu}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl text-xl hover:bg-blue-500 transition-colors font-bold">
              🏠 В меню
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
