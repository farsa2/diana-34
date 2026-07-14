import { useState } from 'react'
import { ArrowDown } from 'lucide-react'
import { EVENT } from '../data'
import { Nav } from './Nav'

const VIDEO_URL =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260703_053131_1ec3dd1c-d627-44fb-ab20-6e1fce41b0d5.mp4'

export function Hero() {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section
      id="top"
      className="relative h-screen w-full overflow-hidden flex flex-col bg-[#0a0809]"
    >
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(42,24,32,0.95),#0a0809_65%)]"
        aria-hidden
      />
      <video
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
          videoReady ? 'opacity-100' : 'opacity-0'
        }`}
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setVideoReady(true)}
        onPlaying={() => setVideoReady(true)}
      />
      <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-[#0a0809]" />
      <div
        className="bloom pointer-events-none absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(242,168,192,0.35),transparent_70%)]"
        aria-hidden
      />

      <Nav />

      <div className="relative z-10 flex-1 flex items-start justify-center pt-16 sm:pt-20 md:pt-24 px-5">
        <div className="text-center max-w-3xl">
          <p className="animate-fade-up text-[var(--rose-soft)] text-xs sm:text-sm tracking-[0.28em] uppercase font-medium">
            личное приглашение
          </p>

          <h1 className="animate-fade-up delay-1 font-display text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[7.5rem] leading-[0.95] tracking-[-0.02em] mt-4 sm:mt-5">
            {EVENT.title}
            <span className="text-shimmer"> · {EVENT.age}</span>
          </h1>

          <p className="animate-fade-up delay-2 text-white/80 text-sm sm:text-base md:text-lg leading-relaxed max-w-md mx-auto mt-6 sm:mt-8">
            Приглашаю тебя разделить со мной этот день — мягкий свет, горы,
            бассейн и вечер, который хочется запомнить.
          </p>

          <div className="animate-fade-up delay-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a
              href="#rsvp"
              className="px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-gray-900 text-sm font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              Я буду
            </a>
            <a
              href="#details"
              className="px-5 sm:px-6 py-2.5 sm:py-3 liquid-glass rounded-full text-white text-sm font-semibold hover:bg-white/10 transition-colors"
            >
              Подробнее
            </a>
          </div>

          <div className="animate-fade-up delay-4 mt-10 sm:mt-12 flex flex-col items-center gap-2 text-white/55 text-xs sm:text-sm tracking-wide">
            <span>
              {EVENT.dateLabel} · {EVENT.time}
            </span>
            <a
              href="#details"
              className="float-soft mt-2 inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Листать вниз"
            >
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
