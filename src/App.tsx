import { useState } from 'react'
import GameMenu from './components/GameMenu'
import WeaponSelect from './components/WeaponSelect'
import Game from './components/Game'

export type Character = 'lisa' | 'dasha'
export type Weapon = 'ak' | 'shotgun' | 'pistol' | 'sniper'

export interface WeaponStats {
  name: string
  damage: number
  fireRate: number
  spread: number
  bulletsPerShot: number
  emoji: string
}

export const WEAPONS: Record<Weapon, WeaponStats> = {
  ak: { name: 'Автомат', damage: 12, fireRate: 80, spread: 0.025, bulletsPerShot: 1, emoji: '🔫' },
  shotgun: { name: 'Дробовик', damage: 10, fireRate: 900, spread: 0.12, bulletsPerShot: 8, emoji: '💥' },
  pistol: { name: 'Пистолет', damage: 22, fireRate: 350, spread: 0.015, bulletsPerShot: 1, emoji: '🔫' },
  sniper: { name: 'Снайперка', damage: 90, fireRate: 1800, spread: 0.003, bulletsPerShot: 1, emoji: '🎯' },
}

type GameState = 'menu' | 'weapon' | 'game'

function App() {
  const [gameState, setGameState] = useState<GameState>('menu')
  const [playerChar, setPlayerChar] = useState<Character>('lisa')
  const [playerWeapon, setPlayerWeapon] = useState<Weapon>('ak')

  const handleCharacterSelect = (char: Character) => {
    setPlayerChar(char)
    setGameState('weapon')
  }

  const handleWeaponSelect = (weapon: Weapon) => {
    setPlayerWeapon(weapon)
    setGameState('game')
  }

  const handleBackToMenu = () => {
    setGameState('menu')
  }

  return (
    <div className="w-full h-screen overflow-hidden bg-gray-900">
      {gameState === 'menu' && (
        <GameMenu onSelect={handleCharacterSelect} />
      )}
      {gameState === 'weapon' && (
        <WeaponSelect onSelect={handleWeaponSelect} onBack={() => setGameState('menu')} />
      )}
      {gameState === 'game' && (
        <Game
          playerCharacter={playerChar}
          playerWeapon={playerWeapon}
          onBackToMenu={handleBackToMenu}
        />
      )}
    </div>
  )
}

export default App
