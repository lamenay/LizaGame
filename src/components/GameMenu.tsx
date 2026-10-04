import { Character } from '../App'

interface Props {
  onSelect: (char: Character) => void
}

export default function GameMenu({ onSelect }: Props) {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900">
      <h1 className="text-6xl font-bold text-white mb-4 animate-pulse">
        ⚔️ Лиза vs Даша ⚔️
      </h1>
      <p className="text-xl text-gray-300 mb-12">3D Шутер 1 на 1</p>
      
      <h2 className="text-3xl text-white mb-8">Выбери персонажа:</h2>
      
      <div className="flex gap-12">
        {/* Лиза */}
        <button
          onClick={() => onSelect('lisa')}
          className="group flex flex-col items-center p-8 bg-gradient-to-b from-pink-600 to-pink-800 rounded-2xl border-4 border-pink-400 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/50"
        >
          <div className="text-8xl mb-4 group-hover:animate-bounce">👧</div>
          <span className="text-3xl font-bold text-white">Лиза</span>
          <span className="text-pink-200 mt-2">Девочка-воин</span>
          <div className="mt-4 text-sm text-pink-300">
            ❤️ HP: 100 | 🏃 Скорость: Средняя
          </div>
        </button>

        {/* Даша */}
        <button
          onClick={() => onSelect('dasha')}
          className="group flex flex-col items-center p-8 bg-gradient-to-b from-orange-600 to-orange-800 rounded-2xl border-4 border-orange-400 hover:scale-110 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/50"
        >
          <div className="text-8xl mb-4 group-hover:animate-bounce">🐱</div>
          <span className="text-3xl font-bold text-white">Даша</span>
          <span className="text-orange-200 mt-2">Кошка-снайпер</span>
          <div className="mt-4 text-sm text-orange-300">
            ❤️ HP: 80 | 🏃 Скорость: Быстрая
          </div>
        </button>
      </div>

      <div className="mt-12 text-gray-400 text-center">
        <p className="mb-2">🎮 Управление:</p>
        <p>WASD - движение | Мышь - прицел | ЛКМ - стрельба | R - перезарядка</p>
      </div>
    </div>
  )
}
