import { useEffect, useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'

const NAV = [
  { label: 'О празднике', href: '#details' },
  { label: 'Место', href: '#gallery' },
  { label: 'Дресс-код', href: '#dresscode' },
  { label: 'RSVP', href: '#rsvp' },
]

export function Nav() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`relative z-30 w-full px-5 sm:px-6 md:px-12 lg:px-16 py-4 sm:py-5 transition-colors duration-500 ${
        scrolled ? 'bg-black/35 backdrop-blur-md' : ''
      }`}
    >
      <div className="flex items-center justify-between gap-4">
        <a href="#top" className="flex items-center gap-2.5 group">
          <span className="relative inline-flex h-7 w-7 items-center justify-center">
            <svg viewBox="0 0 28 28" className="h-7 w-7" aria-hidden>
              <path
                d="M14 2.5 L25.5 14 L14 25.5 L2.5 14 Z"
                fill="currentColor"
                className="text-rose-200/90"
                opacity="0.9"
              />
              <path
                d="M14 6 L22 14 L14 22 L6 14 Z"
                fill="currentColor"
                className="text-pink-300"
                opacity="0.5"
              />
            </svg>
          </span>
          <span className="text-white text-lg sm:text-xl font-medium tracking-tight">
            diana<span className="text-[var(--rose)]">.</span>34
          </span>
        </a>

        <div className="hidden md:flex items-center gap-7 lg:gap-9">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a
            href="#rsvp"
            className="liquid-glass rounded-full px-5 py-2 text-white text-sm font-medium hover:bg-white/10 transition-colors"
          >
            Подтвердить
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Закрыть меню' : 'Открыть меню'}
          className="md:hidden relative h-10 w-10 flex items-center justify-center text-white"
          onClick={() => setOpen((v) => !v)}
        >
          <Menu
            className={`absolute h-6 w-6 transition-all duration-300 ${
              open ? 'opacity-0 scale-75 rotate-90' : 'opacity-100 scale-100 rotate-0'
            }`}
          />
          <X
            className={`absolute h-6 w-6 transition-all duration-300 ${
              open ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-75 -rotate-90'
            }`}
          />
        </button>
      </div>

      <div
        className={`md:hidden absolute left-5 right-5 top-full mt-2 origin-top transition-all duration-400 ${
          open
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-3 pointer-events-none'
        }`}
        style={{ transitionTimingFunction: 'cubic-bezier(0.16,1,0.3,1)' }}
      >
        <div className="bg-[#2C1A22]/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl">
          <div className="flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-white/90 hover:text-white text-base font-medium rounded-xl px-3 py-3 hover:bg-white/5 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-white/10">
            <a
              href="#rsvp"
              onClick={() => setOpen(false)}
              className="flex items-center justify-center gap-2 liquid-glass rounded-full px-5 py-3 text-white text-sm font-medium"
            >
              Подтвердить участие
              <ChevronDown className="h-3.5 w-3.5 rotate-[-90deg]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
