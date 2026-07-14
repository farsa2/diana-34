import { Clock, MapPin, PartyPopper, Sparkles } from 'lucide-react'
import { EVENT } from '../data'

const cards = [
  {
    icon: Clock,
    label: 'Когда',
    title: EVENT.dateLabel,
    detail: EVENT.time,
  },
  {
    icon: MapPin,
    label: 'Где',
    title: EVENT.address,
    detail: EVENT.place,
  },
  {
    icon: PartyPopper,
    label: 'Формат',
    title: EVENT.format,
    detail: 'От дневного света до вечерних огней',
  },
  {
    icon: Sparkles,
    label: 'Дресс-код',
    title: EVENT.dressCode,
    detail: 'Нежность в розовом, глубина в чёрном',
  },
]

export function Details() {
  return (
    <section id="details" className="relative px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[var(--rose)] text-xs sm:text-sm tracking-[0.25em] uppercase">
            детали дня
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] mt-3 text-white">
            Всё, что нужно знать
            <span className="text-white/45"> — и чуть больше тепла</span>
          </h2>
          <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed max-w-xl">
            31 июля мне исполняется 34. Хочу встретить этот день рядом с теми,
            кто делает мою жизнь светлее. Собираемся среди гор и южного воздуха.
          </p>
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {cards.map(({ icon: Icon, label, title, detail }) => (
            <article
              key={label}
              id={label === 'Дресс-код' ? 'dresscode' : undefined}
              className="liquid-glass-rose rounded-3xl p-6 sm:p-8 group transition-transform duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/5 text-[var(--rose-soft)]">
                  <Icon className="h-5 w-5" strokeWidth={1.6} />
                </span>
                <div>
                  <p className="text-white/45 text-xs tracking-[0.2em] uppercase">
                    {label}
                  </p>
                  <h3 className="font-display text-2xl sm:text-3xl text-white mt-1.5 leading-tight">
                    {title}
                  </h3>
                  <p className="text-white/60 text-sm sm:text-base mt-2 leading-relaxed">
                    {detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-8 sm:mt-10 liquid-glass rounded-3xl p-6 sm:p-8 md:p-10 overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-xl">
              <p className="text-[var(--rose-soft)] text-xs tracking-[0.22em] uppercase">
                как добраться
              </p>
              <h3 className="font-display text-3xl sm:text-4xl text-white mt-2">
                Сочинская Барановка
              </h3>
              <p className="text-white/65 mt-3 leading-relaxed">
                СНТ «Радуга», участок 150. Высота, воздух и вид, от которого
                хочется замолчать на секунду — а потом улыбнуться.
              </p>
            </div>
            <a
              href={`https://yandex.ru/maps/?text=${encodeURIComponent(
                'Сочи Барановка СНТ Радуга 150',
              )}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex self-start items-center justify-center rounded-full bg-[var(--rose)] text-[#1a0f14] px-6 py-3 text-sm font-semibold hover:bg-[var(--blush)] transition-colors"
            >
              Открыть на карте
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
