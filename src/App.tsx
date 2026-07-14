import { Hero } from './components/Hero'
import { Details } from './components/Details'
import { Gallery } from './components/Gallery'
import { Rsvp } from './components/Rsvp'
import { MusicPlayer } from './components/MusicPlayer'

export default function App() {
  return (
    <main className="min-h-screen bg-[var(--ink)] overflow-x-hidden">
      <Hero />
      <Details />
      <Gallery />
      <Rsvp />
      <footer className="px-5 sm:px-6 md:px-12 lg:px-16 pb-12 pt-4">
        <div className="mx-auto max-w-6xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-t border-white/10 pt-8">
          <p className="font-display text-xl text-white/80">Диана · 34</p>
          <p className="text-white/40 text-sm">
            31.07.2026 · с любовью
          </p>
        </div>
      </footer>
      <MusicPlayer />
    </main>
  )
}
