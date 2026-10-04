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
  isPlayer: boolean
  damage: number
}

interface Obstacle {
  mesh: THREE.Mesh
  min: THREE.Vector3
  max: THREE.Vector3
}

export default function Game({ playerCharacter, playerWeapon, onBackToMenu }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [playerHP, setPlayerHP] = useState(playerCharacter === 'lisa' ? 100 : 80)
  const [botHP, setBotHP] = useState(playerCharacter === 'lisa' ? 80 : 100)
  const [gameOver, setGameOver] = useState<'win' | 'lose' | null>(null)
  const [ammo, setAmmo] = useState(playerWeapon === 'shotgun' ? 8 : playerWeapon === 'sniper' ? 5 : playerWeapon === 'pistol' ? 12 : 30)
  const [isReloading, setIsReloading] = useState(false)
  const [hitMarker, setHitMarker] = useState(false)
  const [damageFlash, setDamageFlash] = useState(false)
  const [killCount, setKillCount] = useState(0)
  const [started, setStarted] = useState(false)

  const weaponStats = WEAPONS[playerWeapon]
  const botCharacter: Character = playerCharacter === 'lisa' ? 'dasha' : 'lisa'
  const playerMaxHP = playerCharacter === 'lisa' ? 100 : 80
  const botMaxHP = botCharacter === 'lisa' ? 100 : 80
  const playerSpeed = playerCharacter === 'lisa' ? 10 : 14

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
    sunLight.shadow.camera.near = 1
    sunLight.shadow.camera.far = 200
    sunLight.shadow.camera.left = -80
    sunLight.shadow.camera.right = 80
    sunLight.shadow.camera.top = 80
    sunLight.shadow.camera.bottom = -80
    scene.add(sunLight)
    scene.add(new THREE.HemisphereLight(0x87ceeb, 0x3d8c40, 0.3))

    // ===== GROUND =====
    const ground = new THREE.Mesh(
      new THREE.PlaneGeometry(200, 200),
      new THREE.MeshLambertMaterial({ color: 0x4a8c3f })
    )
    ground.rotation.x = -Math.PI / 2
    ground.receiveShadow = true
    scene.add(ground)

    // ===== OBSTACLES =====
    const obstacles: Obstacle[] = []
    const addObstacle = (x: number, z: number, w: number, h: number, d: number, color: number) => {
      const mesh = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }))
      mesh.position.set(x, h / 2, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      scene.add(mesh)
      obstacles.push({ mesh, min: new THREE.Vector3(x - w/2, 0, z - d/2), max: new THREE.Vector3(x + w/2, h, z + d/2) })
    }

    addObstacle(-25, -25, 10, 8, 10, 0x8b6914)
    addObstacle(25, 25, 10, 8, 10, 0x8b6914)
    addObstacle(-25, 25, 8, 5, 8, 0x696969)
    addObstacle(25, -25, 8, 5, 8, 0x696969)
    addObstacle(0, 0, 5, 4, 5, 0xa0522d)
    addObstacle(-40, 0, 3, 3, 15, 0x556b2f)
    addObstacle(40, 0, 3, 3, 15, 0x556b2f)
    addObstacle(0, -40, 15, 3, 3, 0x556b2f)
    addObstacle(0, 40, 15, 3, 3, 0x556b2f)
    addObstacle(-10, -10, 3, 2, 3, 0xdeb887)
    addObstacle(10, 10, 3, 2, 3, 0xdeb887)
    addObstacle(-10, 15, 2, 1.5, 2, 0xdeb887)
    addObstacle(10, -15, 2, 1.5, 2, 0xdeb887)
    addObstacle(-35, -35, 4, 3, 4, 0x4a4a4a)
    addObstacle(35, 35, 4, 3, 4, 0x4a4a4a)
    addObstacle(35, -35, 4, 3, 4, 0x4a4a4a)
    addObstacle(-35, 35, 4, 3, 4, 0x4a4a4a)
    addObstacle(0, -90, 200, 10, 5, 0x3a3a3a)
    addObstacle(0, 90, 200, 10, 5, 0x3a3a3a)
    addObstacle(-90, 0, 5, 10, 200, 0x3a3a3a)
    addObstacle(90, 0, 5, 10, 200, 0x3a3a3a)

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
      const group = new THREE.Group()
      const pantsMat = new THREE.MeshLambertMaterial({ color: 0xff69b4 })
      const topMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const skinMat = new THREE.MeshLambertMaterial({ color: 0xffdbac })
      const hairMat = new THREE.MeshLambertMaterial({ color: 0x722f37 })

      // Legs - pink pants
      const legGeo = new THREE.CylinderGeometry(0.12, 0.11, 0.7, 8)
      const legL = new THREE.Mesh(legGeo, pantsMat); legL.position.set(-0.15, 0.35, 0); legL.castShadow = true; group.add(legL)
      const legR = new THREE.Mesh(legGeo, pantsMat); legR.position.set(0.15, 0.35, 0); legR.castShadow = true; group.add(legR)

      // Shoes
      const shoeMat = new THREE.MeshLambertMaterial({ color: 0xffffff })
      const shoeGeo = new THREE.BoxGeometry(0.14, 0.08, 0.22)
      const shoeL = new THREE.Mesh(shoeGeo, shoeMat); shoeL.position.set(-0.15, 0.04, 0.03); group.add(shoeL)
      const shoeR = new THREE.Mesh(shoeGeo, shoeMat); shoeR.position.set(0.15, 0.04, 0.03); group.add(shoeR)

      // Torso - white top
      const torso = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.3, 0.7, 8), topMat)
      torso.position.y = 1.05; torso.castShadow = true; group.add(torso)

      // Belt
      const belt = new THREE.Mesh(new THREE.CylinderGeometry(0.31, 0.31, 0.06, 8), new THREE.MeshLambertMaterial({ color: 0xff1493 }))
      belt.position.y = 0.72; group.add(belt)

      // Arms
      const armGeo = new THREE.CylinderGeometry(0.07, 0.07, 0.55, 8)
      const armL = new THREE.Mesh(armGeo, skinMat); armL.position.set(-0.38, 1.05, 0.1); armL.rotation.x = -0.3; group.add(armL)
      const armR = new THREE.Mesh(armGeo, skinMat); armR.position.set(0.38, 1.05, 0.15); armR.rotation.x = -0.5; group.add(armR)

      // Neck
      const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.1, 0.12, 8), skinMat); neck.position.y = 1.46; group.add(neck)

      // Head
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.25, 12, 10), skinMat)
      head.position.y = 1.72; head.castShadow = true; group.add(head)

      // Burgundy hair
      const hairMain = new THREE.Mesh(new THREE.SphereGeometry(0.28, 10, 8), hairMat)
      hairMain.position.set(0, 1.78, -0.03); hairMain.scale.set(1, 0.9, 1.1); group.add(hairMain)
      const bangs = new THREE.Mesh(new THREE.BoxGeometry(0.4, 0.1, 0.15), hairMat)
      bangs.position.set(0, 1.88, 0.15); group.add(bangs)
      const hairBack = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.08, 0.6, 8), hairMat)
      hairBack.position.set(0, 1.45, -0.2); group.add(hairBack)
      const hairSideL = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.35, 6), hairMat)
      hairSideL.position.set(-0.22, 1.55, 0); hairSideL.rotation.z = 0.15; group.add(hairSideL)
      const hairSideR = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.04, 0.35, 6), hairMat)
      hairSideR.position.set(0.22, 1.55, 0); hairSideR.rotation.z = -0.15; group.add(hairSideR)

      // Eyes
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x2244aa })
      const eyeWhiteMat = new THREE.MeshBasicMaterial({ color: 0xffffff })
      const eyeGeo = new THREE.SphereGeometry(0.04, 6, 6)
      const eyeWhiteGeo = new THREE.SphereGeometry(0.055, 6, 6)
      const ewL = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat); ewL.position.set(-0.09, 1.74, 0.2); group.add(ewL)
      const eL = new THREE.Mesh(eyeGeo, eyeMat); eL.position.set(-0.09, 1.74, 0.23); group.add(eL)
      const ewR = new THREE.Mesh(eyeWhiteGeo, eyeWhiteMat); ewR.position.set(0.09, 1.74, 0.2); group.add(ewR)
      const eR = new THREE.Mesh(eyeGeo, eyeMat); eR.position.set(0.09, 1.74, 0.23); group.add(eR)

      // Mouth
      const mouth = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.02, 0.02), new THREE.MeshBasicMaterial({ color: 0xff4466 }))
      mouth.position.set(0, 1.64, 0.23); group.add(mouth)

      // Gun
      const gunGroup = new THREE.Group()
      gunGroup.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.4), new THREE.MeshLambertMaterial({ color: 0x222222 })))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.25, 6), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }))
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.3; gunGroup.add(barrel)
      gunGroup.position.set(0.38, 0.95, 0.35); gunGroup.rotation.x = -0.3; group.add(gunGroup)

      return group
    }

    // ===== CHARACTER: DASHA (cat) =====
    const createDasha = (): THREE.Group => {
      const group = new THREE.Group()
      const furDark = new THREE.MeshLambertMaterial({ color: 0x3d2b1f })
      const furBrown = new THREE.MeshLambertMaterial({ color: 0x8b5e3c })
      const furLight = new THREE.MeshLambertMaterial({ color: 0xc4956a })
      const furBlack = new THREE.MeshLambertMaterial({ color: 0x1a1a1a })

      // Body
      const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.3, 0.5, 8, 12), furBrown)
      body.position.y = 0.9; body.castShadow = true; group.add(body)

      // Dark patches
      const p1 = new THREE.Mesh(new THREE.SphereGeometry(0.15, 6, 6), furDark)
      p1.position.set(0.15, 1.0, 0.2); p1.scale.set(1, 1.5, 0.5); group.add(p1)
      const p2 = new THREE.Mesh(new THREE.SphereGeometry(0.12, 6, 6), furBlack)
      p2.position.set(-0.18, 0.85, 0.15); p2.scale.set(1, 1.3, 0.5); group.add(p2)

      // Chest
      const chest = new THREE.Mesh(new THREE.SphereGeometry(0.18, 8, 6), furLight)
      chest.position.set(0, 0.75, 0.2); chest.scale.set(1, 1.2, 0.7); group.add(chest)

      // Legs
      const legGeo = new THREE.CylinderGeometry(0.07, 0.06, 0.5, 8)
      const pawGeo = new THREE.SphereGeometry(0.08, 6, 6)
      const fLL = new THREE.Mesh(legGeo, furBrown); fLL.position.set(-0.15, 0.25, 0.1); fLL.castShadow = true; group.add(fLL)
      const fPL = new THREE.Mesh(pawGeo, furDark); fPL.position.set(-0.15, 0.04, 0.12); fPL.scale.set(1, 0.6, 1.2); group.add(fPL)
      const fLR = new THREE.Mesh(legGeo, furBrown); fLR.position.set(0.15, 0.25, 0.1); fLR.castShadow = true; group.add(fLR)
      const fPR = new THREE.Mesh(pawGeo, furDark); fPR.position.set(0.15, 0.04, 0.12); fPR.scale.set(1, 0.6, 1.2); group.add(fPR)
      const bLegGeo = new THREE.CylinderGeometry(0.08, 0.07, 0.5, 8)
      const bLL = new THREE.Mesh(bLegGeo, furBrown); bLL.position.set(-0.15, 0.25, -0.1); bLL.castShadow = true; group.add(bLL)
      const bPL = new THREE.Mesh(pawGeo, furDark); bPL.position.set(-0.15, 0.04, -0.1); bPL.scale.set(1, 0.6, 1.2); group.add(bPL)
      const bLR = new THREE.Mesh(bLegGeo, furBrown); bLR.position.set(0.15, 0.25, -0.1); bLR.castShadow = true; group.add(bLR)
      const bPR = new THREE.Mesh(pawGeo, furDark); bPR.position.set(0.15, 0.04, -0.1); bPR.scale.set(1, 0.6, 1.2); group.add(bPR)

      // Head
      const head = new THREE.Mesh(new THREE.SphereGeometry(0.28, 12, 10), furBrown)
      head.position.y = 1.5; head.scale.set(1, 0.9, 0.95); head.castShadow = true; group.add(head)
      const headMark = new THREE.Mesh(new THREE.SphereGeometry(0.15, 8, 6), furDark)
      headMark.position.set(0, 1.6, -0.1); headMark.scale.set(1.2, 0.8, 0.8); group.add(headMark)
      const muzzle = new THREE.Mesh(new THREE.SphereGeometry(0.12, 8, 6), furLight)
      muzzle.position.set(0, 1.42, 0.2); muzzle.scale.set(1.2, 0.8, 0.8); group.add(muzzle)
      const nose = new THREE.Mesh(new THREE.SphereGeometry(0.035, 6, 6), new THREE.MeshLambertMaterial({ color: 0xff8888 }))
      nose.position.set(0, 1.46, 0.28); group.add(nose)

      // Eyes
      const eyeMat = new THREE.MeshBasicMaterial({ color: 0x44cc44 })
      const pupilMat = new THREE.MeshBasicMaterial({ color: 0x000000 })
      const ewL = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xeeffee }))
      ewL.position.set(-0.12, 1.54, 0.2); group.add(ewL)
      const eL = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), eyeMat)
      eL.position.set(-0.12, 1.54, 0.24); group.add(eL)
      const pL = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), pupilMat)
      pL.position.set(-0.12, 1.54, 0.27); pL.scale.set(0.5, 1, 0.5); group.add(pL)
      const ewR = new THREE.Mesh(new THREE.SphereGeometry(0.07, 8, 6), new THREE.MeshBasicMaterial({ color: 0xeeffee }))
      ewR.position.set(0.12, 1.54, 0.2); group.add(ewR)
      const eR = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), eyeMat)
      eR.position.set(0.12, 1.54, 0.24); group.add(eR)
      const pR = new THREE.Mesh(new THREE.SphereGeometry(0.03, 6, 6), pupilMat)
      pR.position.set(0.12, 1.54, 0.27); pR.scale.set(0.5, 1, 0.5); group.add(pR)

      // Ears
      const earGeo = new THREE.ConeGeometry(0.1, 0.22, 4)
      const earL = new THREE.Mesh(earGeo, furBrown); earL.position.set(-0.16, 1.78, 0.02); earL.rotation.z = 0.2; group.add(earL)
      const earR = new THREE.Mesh(earGeo, furBrown); earR.position.set(0.16, 1.78, 0.02); earR.rotation.z = -0.2; group.add(earR)
      const iearMat = new THREE.MeshLambertMaterial({ color: 0xffaaaa })
      const iearGeo = new THREE.ConeGeometry(0.05, 0.12, 4)
      const ieL = new THREE.Mesh(iearGeo, iearMat); ieL.position.set(-0.16, 1.76, 0.05); ieL.rotation.z = 0.2; group.add(ieL)
      const ieR = new THREE.Mesh(iearGeo, iearMat); ieR.position.set(0.16, 1.76, 0.05); ieR.rotation.z = -0.2; group.add(ieR)

      // Whiskers
      const wMat = new THREE.MeshBasicMaterial({ color: 0xcccccc })
      const wGeo = new THREE.CylinderGeometry(0.003, 0.002, 0.2, 4)
      for (let s = -1; s <= 1; s += 2) {
        for (let i = 0; i < 3; i++) {
          const w = new THREE.Mesh(wGeo, wMat)
          w.position.set(s * 0.15, 1.43 + i * 0.03, 0.25)
          w.rotation.z = Math.PI / 2 + s * (0.1 + i * 0.1)
          group.add(w)
        }
      }

      // Tail
      for (let i = 0; i < 8; i++) {
        const t = i / 8
        const seg = new THREE.Mesh(new THREE.SphereGeometry(0.05 - t * 0.02, 6, 6), i % 2 === 0 ? furBrown : furDark)
        const angle = t * Math.PI * 0.6
        seg.position.set(Math.sin(angle) * 0.1, 0.8 + t * 0.8, -0.3 - Math.cos(angle) * 0.3)
        group.add(seg)
      }

      // Black stripe
      const stripe = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.5, 0.3), furBlack)
      stripe.position.set(0, 1.0, -0.15); group.add(stripe)

      // Gun
      const gunG = new THREE.Group()
      gunG.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.06, 0.35), new THREE.MeshLambertMaterial({ color: 0x222222 })))
      const b = new THREE.Mesh(new THREE.CylinderGeometry(0.015, 0.015, 0.2, 6), new THREE.MeshLambertMaterial({ color: 0x1a1a1a }))
      b.rotation.x = Math.PI / 2; b.position.z = 0.25; gunG.add(b)
      gunG.position.set(0, 0.85, 0.35); gunG.rotation.x = -0.2; group.add(gunG)

      return group
    }

    const createCharacter = (isLisa: boolean) => isLisa ? createLisa() : createDasha()

    const playerModel = createCharacter(playerCharacter === 'lisa')
    playerModel.position.set(-40, 0, -40)
    scene.add(playerModel)

    const botModel = createCharacter(botCharacter === 'lisa')
    botModel.position.set(40, 0, 40)
    scene.add(botModel)

    // ===== FIRST PERSON WEAPON =====
    const fpWeapon = new THREE.Group()
    const fpGunMat = new THREE.MeshLambertMaterial({ color: 0x1a1a1a })

    if (playerWeapon === 'ak') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.5), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.012, 0.012, 0.3, 6), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.35; fpWeapon.add(barrel)
      const mag = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.12, 0.04), new THREE.MeshLambertMaterial({ color: 0x333333 }))
      mag.position.set(0, -0.08, 0.05); mag.rotation.x = 0.2; fpWeapon.add(mag)
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.15), new THREE.MeshLambertMaterial({ color: 0x654321 }))
      stock.position.z = -0.3; fpWeapon.add(stock)
    } else if (playerWeapon === 'shotgun') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.06, 0.07, 0.55), fpGunMat))
      const b1 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.35, 8), fpGunMat)
      b1.rotation.x = Math.PI / 2; b1.position.set(-0.015, 0.01, 0.4); fpWeapon.add(b1)
      const b2 = new THREE.Mesh(new THREE.CylinderGeometry(0.018, 0.018, 0.35, 8), fpGunMat)
      b2.rotation.x = Math.PI / 2; b2.position.set(0.015, 0.01, 0.4); fpWeapon.add(b2)
      const pump = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.04, 0.12), new THREE.MeshLambertMaterial({ color: 0x654321 }))
      pump.position.set(0, -0.04, 0.15); fpWeapon.add(pump)
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.05, 0.06, 0.2), new THREE.MeshLambertMaterial({ color: 0x8b4513 }))
      stock.position.z = -0.35; fpWeapon.add(stock)
    } else if (playerWeapon === 'pistol') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.035, 0.04, 0.2), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.008, 0.08, 6), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.12; fpWeapon.add(barrel)
      const grip = new THREE.Mesh(new THREE.BoxGeometry(0.03, 0.08, 0.04), new THREE.MeshLambertMaterial({ color: 0x4a3728 }))
      grip.position.set(0, -0.05, -0.05); grip.rotation.x = 0.3; fpWeapon.add(grip)
    } else if (playerWeapon === 'sniper') {
      fpWeapon.add(new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.05, 0.7), fpGunMat))
      const barrel = new THREE.Mesh(new THREE.CylinderGeometry(0.01, 0.015, 0.4, 8), fpGunMat)
      barrel.rotation.x = Math.PI / 2; barrel.position.z = 0.5; fpWeapon.add(barrel)
      const scope = new THREE.Mesh(new THREE.CylinderGeometry(0.025, 0.025, 0.15, 8), new THREE.MeshLambertMaterial({ color: 0x333333 }))
      scope.rotation.x = Math.PI / 2; scope.position.set(0, 0.05, 0.1); fpWeapon.add(scope)
      const lens = new THREE.Mesh(new THREE.CircleGeometry(0.024, 8), new THREE.MeshBasicMaterial({ color: 0x4488ff }))
      lens.position.set(0, 0.05, 0.18); fpWeapon.add(lens)
      const stock = new THREE.Mesh(new THREE.BoxGeometry(0.04, 0.07, 0.2), new THREE.MeshLambertMaterial({ color: 0x654321 }))
      stock.position.z = -0.4; fpWeapon.add(stock)
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
    const maxAmmo = playerWeapon === 'shotgun' ? 8 : playerWeapon === 'sniper' ? 5 : playerWeapon === 'pistol' ? 12 : 30
    const state = {
      bullets: [] as Bullet[],
      keys: {} as Record<string, boolean>,
      yaw: Math.PI * 0.75, // Start looking toward bot
      pitch: 0,
      lastShot: 0,
      botLastShot: 0,
      playerHP: playerMaxHP,
      botHP: botMaxHP,
      ammo: maxAmmo,
      maxAmmo,
      isReloading: false,
      reloadStart: 0,
      playerPos: new THREE.Vector3(-40, 0, -40),
      botPos: new THREE.Vector3(40, 0, 40),
      botStrafeDir: 1,
      botStrafeTimer: 0,
      gameOver: false,
      weaponBob: 0,
      recoilOffset: 0,
      isMouseDown: false,
      mouseInCanvas: false,
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

    // ===== INPUT (works WITHOUT pointer lock) =====
    const onKeyDown = (e: KeyboardEvent) => {
      state.keys[e.key.toLowerCase()] = true
      if (e.key.toLowerCase() === 'r' && !state.isReloading && state.ammo < state.maxAmmo) {
        state.isReloading = true
        state.reloadStart = Date.now()
        setIsReloading(true)
      }
    }
    const onKeyUp = (e: KeyboardEvent) => { state.keys[e.key.toLowerCase()] = false }

    // Mouse look - works by tracking mouse position relative to center
    let lastMouseX = window.innerWidth / 2
    let lastMouseY = window.innerHeight / 2
    let mouseLookActive = false

    const onMouseMove = (e: MouseEvent) => {
      if (!mouseLookActive || state.gameOver) return
      const dx = e.clientX - lastMouseX
      const dy = e.clientY - lastMouseY
      lastMouseX = e.clientX
      lastMouseY = e.clientY
      state.yaw -= dx * 0.003
      state.pitch -= dy * 0.003
      state.pitch = Math.max(-1.2, Math.min(1.2, state.pitch))
    }

    const onMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        state.isMouseDown = true
        if (!state.gameOver) {
          if (!mouseLookActive) {
            mouseLookActive = true
            lastMouseX = e.clientX
            lastMouseY = e.clientY
            setStarted(true)
          }
          playerShoot()
        }
      }
    }
    const onMouseUp = (e: MouseEvent) => {
      if (e.button === 0) state.isMouseDown = false
    }

    // Also try pointer lock if available
    const onPointerLockChange = () => {
      if (document.pointerLockElement === renderer.domElement) {
        mouseLookActive = true
        setStarted(true)
      }
    }

    const onCanvasClick = () => {
      // Try pointer lock, but game works without it too
      try { renderer.domElement.requestPointerLock() } catch(e) { /* ignore */ }
      mouseLookActive = true
      setStarted(true)
    }

    // Context menu prevention
    const onContextMenu = (e: Event) => e.preventDefault()

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('keyup', onKeyUp)
    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mousedown', onMouseDown)
    document.addEventListener('mouseup', onMouseUp)
    document.addEventListener('pointerlockchange', onPointerLockChange)
    renderer.domElement.addEventListener('click', onCanvasClick)
    renderer.domElement.addEventListener('contextmenu', onContextMenu)

    // ===== SHOOTING =====
    function playerShoot() {
      if (state.gameOver) return
      const now = Date.now()
      if (state.isReloading) return
      if (state.ammo <= 0) {
        state.isReloading = true
        state.reloadStart = now
        setIsReloading(true)
        return
      }
      if (now - state.lastShot < weaponStats.fireRate) return
      state.lastShot = now
      state.ammo--
      setAmmo(state.ammo)

      state.recoilOffset = playerWeapon === 'sniper' ? 0.12 : playerWeapon === 'shotgun' ? 0.08 : 0.04
      state.pitch += playerWeapon === 'sniper' ? 0.025 : playerWeapon === 'shotgun' ? 0.015 : 0.005
      flashMat.opacity = 1

      // Get camera forward direction
      const dir = new THREE.Vector3(0, 0, -1)
      dir.applyQuaternion(camera.quaternion)

      for (let i = 0; i < weaponStats.bulletsPerShot; i++) {
        const bullet = new THREE.Mesh(
          new THREE.SphereGeometry(playerWeapon === 'sniper' ? 0.03 : 0.04, 4, 4),
          new THREE.MeshBasicMaterial({ color: playerWeapon === 'sniper' ? 0x44ffff : 0xffff44 })
        )
        bullet.position.copy(state.playerPos)
        bullet.position.y += 1.6

        const vel = dir.clone()
        vel.x += (Math.random() - 0.5) * weaponStats.spread
        vel.y += (Math.random() - 0.5) * weaponStats.spread
        vel.z += (Math.random() - 0.5) * weaponStats.spread
        vel.normalize().multiplyScalar(playerWeapon === 'sniper' ? 4 : 2.5)

        scene.add(bullet)
        state.bullets.push({ mesh: bullet, velocity: vel, life: 80, isPlayer: true, damage: weaponStats.damage })
      }
    }

    function botShoot() {
      if (state.gameOver) return
      const now = Date.now()
      if (now - state.botLastShot < weaponStats.fireRate * 2) return
      state.botLastShot = now

      const toPlayer = new THREE.Vector3().subVectors(
        new THREE.Vector3(state.playerPos.x, state.playerPos.y + 1.2, state.playerPos.z),
        new THREE.Vector3(state.botPos.x, state.botPos.y + 1.2, state.botPos.z)
      ).normalize()

      for (let i = 0; i < weaponStats.bulletsPerShot; i++) {
        const bullet = new THREE.Mesh(new THREE.SphereGeometry(0.04, 4, 4), new THREE.MeshBasicMaterial({ color: 0xff4444 }))
        bullet.position.copy(state.botPos)
        bullet.position.y += 1.2

        const vel = toPlayer.clone()
        vel.x += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.y += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.z += (Math.random() - 0.5) * weaponStats.spread * 2.5
        vel.normalize().multiplyScalar(2)

        scene.add(bullet)
        state.bullets.push({ mesh: bullet, velocity: vel, life: 80, isPlayer: false, damage: weaponStats.damage })
      }
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
      if (state.isMouseDown && mouseLookActive && playerWeapon === 'ak') {
        playerShoot()
      }

      // Reload
      if (state.isReloading && Date.now() - state.reloadStart > 2000) {
        state.isReloading = false
        state.ammo = state.maxAmmo
        setIsReloading(false)
        setAmmo(state.maxAmmo)
      }

      // ===== PLAYER MOVEMENT - FIXED =====
      // Get camera forward and right vectors (projected on XZ plane)
      const forward = new THREE.Vector3(0, 0, -1)
      forward.applyAxisAngle(new THREE.Vector3(0, 1, 0), state.yaw)
      forward.y = 0
      forward.normalize()

      const right = new THREE.Vector3(1, 0, 0)
      right.applyAxisAngle(new THREE.Vector3(0, 1, 0), state.yaw)
      right.y = 0
      right.normalize()

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
        if (!checkCollision(newPos, 0.6)) {
          state.playerPos.copy(newPos)
        } else {
          const sX = state.playerPos.clone(); sX.x = newPos.x
          if (!checkCollision(sX, 0.6)) state.playerPos.x = newPos.x
          const sZ = state.playerPos.clone(); sZ.z = newPos.z
          if (!checkCollision(sZ, 0.6)) state.playerPos.z = newPos.z
        }
        state.weaponBob += dt * 8
      }

      playerModel.position.copy(state.playerPos)
      playerModel.rotation.y = state.yaw

      // ===== CAMERA =====
      camera.position.set(state.playerPos.x, state.playerPos.y + 1.7, state.playerPos.z)
      camera.rotation.order = 'YXZ'
      camera.rotation.y = state.yaw
      camera.rotation.x = state.pitch

      // Weapon bob & recoil
      const bobX = isMoving ? Math.sin(state.weaponBob) * 0.01 : 0
      const bobY = isMoving ? Math.abs(Math.cos(state.weaponBob)) * 0.008 : 0
      fpWeapon.position.set(0.25 + bobX, -0.2 + bobY, -0.4 + state.recoilOffset)
      state.recoilOffset *= 0.88

      if (flashMat.opacity > 0) {
        flashMat.opacity -= dt * 15
        if (flashMat.opacity < 0) flashMat.opacity = 0
      }

      // ===== BOT AI =====
      const toPlayer = new THREE.Vector3().subVectors(state.playerPos, state.botPos)
      const distToPlayer = toPlayer.length()
      const botSpeed = botCharacter === 'lisa' ? 7 : 11

      state.botStrafeTimer += dt
      if (state.botStrafeTimer > 2 + Math.random() * 2) {
        state.botStrafeDir *= -1
        state.botStrafeTimer = 0
      }

      const idealDist = playerWeapon === 'sniper' ? 35 : playerWeapon === 'shotgun' ? 8 : 18
      const botMove = new THREE.Vector3()

      if (distToPlayer > idealDist + 8) {
        botMove.add(toPlayer.clone().normalize().multiplyScalar(0.7))
      } else if (distToPlayer < idealDist - 8) {
        botMove.add(toPlayer.clone().normalize().multiplyScalar(-0.5))
      }

      const strafe = new THREE.Vector3(-toPlayer.z, 0, toPlayer.x).normalize()
      botMove.add(strafe.multiplyScalar(state.botStrafeDir * 0.4))

      if (botMove.length() > 0) {
        botMove.normalize()
        const newBotPos = state.botPos.clone().add(botMove.multiplyScalar(botSpeed * dt))
        newBotPos.x = Math.max(-85, Math.min(85, newBotPos.x))
        newBotPos.z = Math.max(-85, Math.min(85, newBotPos.z))
        if (!checkCollision(newBotPos, 0.6)) state.botPos.copy(newBotPos)
      }

      botModel.position.copy(state.botPos)
      botModel.rotation.y = Math.atan2(state.playerPos.x - state.botPos.x, state.playerPos.z - state.botPos.z)

      if (distToPlayer < 55 && distToPlayer > 3) botShoot()

      // ===== BULLETS =====
      for (let i = state.bullets.length - 1; i >= 0; i--) {
        const b = state.bullets[i]
        b.mesh.position.add(b.velocity)
        b.life--

        if (b.life <= 0) { scene.remove(b.mesh); state.bullets.splice(i, 1); continue }

        if (!b.isPlayer) {
          const hp = new THREE.Vector3(state.playerPos.x, state.playerPos.y + 1.2, state.playerPos.z)
          if (b.mesh.position.distanceTo(hp) < 1.0) {
            state.playerHP -= b.damage
            setPlayerHP(Math.max(0, state.playerHP))
            showDamageFlash()
            scene.remove(b.mesh); state.bullets.splice(i, 1)
            if (state.playerHP <= 0) { state.gameOver = true; setGameOver('lose'); document.exitPointerLock() }
            continue
          }
        }

        if (b.isPlayer) {
          const hb = new THREE.Vector3(state.botPos.x, state.botPos.y + 1.2, state.botPos.z)
          if (b.mesh.position.distanceTo(hb) < 1.0) {
            state.botHP -= b.damage
            setBotHP(Math.max(0, state.botHP))
            showHitMarker()
            scene.remove(b.mesh); state.bullets.splice(i, 1)
            if (state.botHP <= 0) { state.gameOver = true; setKillCount(c => c + 1); setGameOver('win'); document.exitPointerLock() }
            continue
          }
        }
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
      renderer.domElement.removeEventListener('click', onCanvasClick)
      renderer.domElement.removeEventListener('contextmenu', onContextMenu)
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])

  return (
    <div className="relative w-full h-full select-none overflow-hidden">
      <div ref={containerRef} className="w-full h-full" style={{ cursor: started ? 'none' : 'pointer' }} />

      {/* Crosshair */}
      {started && !gameOver && (
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

      {/* Bot HUD */}
      <div className="absolute top-6 right-6 pointer-events-none z-10">
        <div className="bg-black/70 backdrop-blur-sm rounded-xl p-4 border border-white/10">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-2xl">{botCharacter === 'lisa' ? '👧' : '🐱'}</span>
            <div>
              <div className="text-white font-bold text-sm">{botCharacter === 'lisa' ? 'Лиза' : 'Даша'}</div>
              <div className="text-xs text-red-400">БОТ</div>
            </div>
          </div>
          <div className="w-44 h-3 bg-gray-800 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-red-600 to-red-400 rounded-full transition-all duration-300" style={{ width: `${(botHP / botMaxHP) * 100}%` }} />
          </div>
          <div className="text-white text-xs mt-1 font-mono">❤️ {Math.max(0, botHP)} / {botMaxHP}</div>
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
              <>{ammo} <span className="text-gray-500 text-base">/ {playerWeapon === 'shotgun' ? 8 : playerWeapon === 'sniper' ? 5 : playerWeapon === 'pistol' ? 12 : 30}</span></>
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

      {/* Start instruction - disappears on first click */}
      {!started && !gameOver && (
        <div className="absolute inset-0 flex items-center justify-center z-40">
          <div className="bg-black/80 backdrop-blur-md rounded-2xl p-8 text-center border border-white/20 max-w-md">
            <h3 className="text-2xl font-bold text-white mb-4">🎮 Готов к бою!</h3>
            <p className="text-gray-300 mb-2">Вы: {playerCharacter === 'lisa' ? '👧 Лиза' : '🐱 Даша'}</p>
            <p className="text-gray-300 mb-2">Противник: {botCharacter === 'lisa' ? '👧 Лиза' : '🐱 Даша'}</p>
            <p className="text-gray-300 mb-4">Оружие: {weaponStats.emoji} {weaponStats.name}</p>
            <p className="text-yellow-400 text-lg animate-pulse">👆 Кликните в любом месте чтобы начать</p>
            <p className="text-gray-500 text-xs mt-3">Двигайте мышь для поворота камеры</p>
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
                <p className="text-xl text-gray-300 mb-2">Вы победили {botCharacter === 'lisa' ? 'Лизу' : 'Дашу'}!</p>
              </>
            ) : (
              <>
                <div className="text-8xl mb-4">💀</div>
                <h2 className="text-5xl font-bold text-red-400 mb-2">ПОРАЖЕНИЕ</h2>
                <p className="text-xl text-gray-300 mb-2">{botCharacter === 'lisa' ? 'Лиза' : 'Даша'} победила вас!</p>
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
