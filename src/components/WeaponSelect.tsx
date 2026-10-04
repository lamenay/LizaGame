import { Weapon, WEAPONS } from '../App'

interface Props {
  onSelect: (weapon: Weapon) => void
  onBack: () => void
}

export default function WeaponSelect({ onSelect, onBack }: Props) {
  const weapons: { key: Weapon; stats: typeof WEAPONS[Weapon]; desc: string }[] = [
    { key: 'ak', stats: WEAPONS.ak, desc: 'Автоматический режим. Зажми ЛКМ для непрерывной стрельбы!' },
    { key: 'shotgun', stats: WEAPONS.shotgun, desc: '8 дробинок за выстрел! Огромный урон вблизи.' },
    { key: 'pistol', stats: WEAPONS.pistol, desc: 'Надёжный пистолет. Точный и быстрый.' },
    { key: 'sniper', stats: WEAPONS.sniper, desc: 'Один выстрел — одно убийство. Огромный урон.' },
  ]

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900">
      <h2 className="text-4xl font-bold text-white mb-4">🔫 Выбери оружие</h2>
      <p className="text-gray-300 mb-8">Каждое оружие уникально — выбирай с умом!</p>

      <div className="grid grid-cols-2 gap-6 max-w-3xl px-4">
        {weapons.map(({ key, stats, desc }) => (
          <button
            key={key}
            onClick={() => onSelect(key)}
            className="group flex flex-col items-center p-6 bg-gradient-to-b from-gray-700 to-gray-800 rounded-xl border-2 border-gray-500 hover:border-yellow-400 hover:scale-105 transition-all duration-200"
          >
            <div className="text-5xl mb-3">{stats.emoji}</div>
            <span className="text-2xl font-bold text-white mb-1">{stats.name}</span>
            <p className="text-xs text-yellow-300 mb-3 text-center italic">{desc}</p>
            <div className="text-sm text-gray-300 space-y-1 text-left w-full">
              <div className="flex justify-between">
                <span>💥 Урон:</span>
                <span className="text-white font-bold">{stats.damage}</span>
              </div>
              <div className="flex justify-between">
                <span>⚡ Скорострельность:</span>
                <span className="text-white font-bold">{stats.fireRate}мс</span>
              </div>
              <div className="flex justify-between">
                <span>🎯 Разброс:</span>
                <span className="text-white font-bold">{(stats.spread * 100).toFixed(1)}%</span>
              </div>
              <div className="flex justify-between">
                <span>🔢 Пуль за выстрел:</span>
                <span className="text-white font-bold">{stats.bulletsPerShot}</span>
              </div>
              {key === 'ak' && (
                <div className="text-green-400 text-xs mt-2 font-bold">⚡ АВТОМАТИЧЕСКИЙ ОГОНЬ</div>
              )}
            </div>
          </button>
        ))}
      </div>

      <button
        onClick={onBack}
        className="mt-8 px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors"
      >
        ← Назад
      </button>
    </div>
  )
}
