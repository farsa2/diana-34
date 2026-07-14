import { useState } from 'react'
import { Check, Heart, Send } from 'lucide-react'
import { GUESTS, rsvpMessage, telegramAppUrl } from '../data'

async function sendRsvp(guestName: string, coming: boolean) {
  const message = rsvpMessage(guestName, coming)
  try {
    await navigator.clipboard.writeText(message)
  } catch {
    // clipboard may be blocked — still open Telegram app
  }

  // t.me часто блокируется в браузере — открываем приложение Telegram напрямую
  const link = document.createElement('a')
  link.href = telegramAppUrl(guestName, coming)
  link.rel = 'noopener noreferrer'
  document.body.appendChild(link)
  link.click()
  link.remove()
}

export function Rsvp() {
  const [selected, setSelected] = useState<string | null>(GUESTS[0].id)
  const [hint, setHint] = useState<string | null>(null)

  const guest = GUESTS.find((g) => g.id === selected) ?? GUESTS[0]

  const handleRsvp = async (coming: boolean) => {
    await sendRsvp(guest.name, coming)
    setHint(
      coming
        ? 'Текст скопирован. Откроется приложение Telegram — вставь сообщение в чат (Cmd+V) и отправь.'
        : 'Текст отказа скопирован. Вставь его в чат с Дианой в Telegram и отправь.',
    )
  }

  return (
    <section id="rsvp" className="relative px-5 sm:px-6 md:px-12 lg:px-16 py-20 sm:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-[radial-gradient(ellipse_at_center,rgba(212,120,154,0.18),transparent_70%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[var(--rose)] text-xs sm:text-sm tracking-[0.25em] uppercase">
            подтверждение
          </p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-3 leading-[1.05]">
            Выбери своё имя
          </h2>
          <p className="mt-5 text-white/65 text-base sm:text-lg leading-relaxed">
            Выбери имя → «Буду» или «Не смогу». Откроется приложение Telegram
            (не сайт), текст скопируется — вставь и отправь Диане.
          </p>
        </div>

        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {GUESTS.map((g) => {
            const isActive = g.id === selected
            return (
              <button
                key={g.id}
                type="button"
                onClick={() => {
                  setSelected(g.id)
                  setHint(null)
                }}
                className={`rounded-2xl px-3 py-4 sm:px-4 sm:py-5 text-left transition-all duration-300 ${
                  isActive
                    ? 'liquid-glass-rose scale-[1.02]'
                    : 'liquid-glass hover:bg-white/5'
                }`}
              >
                <span
                  className={`inline-flex h-7 w-7 items-center justify-center rounded-full text-xs mb-3 ${
                    isActive
                      ? 'bg-[var(--rose)] text-[#1a0f14]'
                      : 'bg-white/10 text-white/70'
                  }`}
                >
                  {isActive ? <Check className="h-3.5 w-3.5" /> : g.name[0]}
                </span>
                <p
                  className={`font-medium text-sm sm:text-base leading-snug ${
                    isActive ? 'text-white' : 'text-white/75'
                  }`}
                >
                  {g.name}
                </p>
              </button>
            )
          })}
        </div>

        <div className="mt-8 sm:mt-10 liquid-glass-rose rounded-[2rem] p-6 sm:p-10 md:p-12 text-center">
          <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-white/5 text-[var(--rose-soft)] mb-5">
            <Heart className="h-5 w-5" strokeWidth={1.6} />
          </div>
          <h3 className="font-display text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
            {guest.vocative}, мне будет очень приятно
            <span className="text-white/45"> увидеть тебя</span>
          </h3>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={() => void handleRsvp(true)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--rose)] text-[#1a0f14] text-sm font-semibold hover:bg-[var(--blush)] transition-colors"
            >
              <Send className="h-4 w-4" />
              Буду
            </button>
            <button
              type="button"
              onClick={() => void handleRsvp(false)}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full liquid-glass text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Не смогу
            </button>
          </div>

          {hint && (
            <p className="mt-6 text-[var(--rose-soft)] text-sm sm:text-base leading-relaxed max-w-md mx-auto animate-fade-up">
              {hint}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
