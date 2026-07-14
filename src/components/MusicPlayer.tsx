import { useEffect, useRef, useState } from 'react'
import { Music2, Play, Volume2, VolumeX } from 'lucide-react'

const MUSIC_SRC = '/music/theme.mp3'

export function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [ready, setReady] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(false)
  const [showIntro, setShowIntro] = useState(true)
  const [missing, setMissing] = useState(false)

  useEffect(() => {
    const audio = new Audio(MUSIC_SRC)
    audio.loop = true
    audio.preload = 'auto'
    audio.volume = 0.45
    audioRef.current = audio

    const onCanPlay = () => setReady(true)
    const onError = () => setMissing(true)
    const onPlay = () => setPlaying(true)
    const onPause = () => setPlaying(false)

    audio.addEventListener('canplaythrough', onCanPlay)
    audio.addEventListener('error', onError)
    audio.addEventListener('play', onPlay)
    audio.addEventListener('pause', onPause)

    return () => {
      audio.pause()
      audio.removeEventListener('canplaythrough', onCanPlay)
      audio.removeEventListener('error', onError)
      audio.removeEventListener('play', onPlay)
      audio.removeEventListener('pause', onPause)
      audioRef.current = null
    }
  }, [])

  const start = async () => {
    const audio = audioRef.current
    if (!audio) return
    try {
      audio.muted = false
      setMuted(false)
      await audio.play()
      setShowIntro(false)
    } catch {
      setShowIntro(true)
    }
  }

  const togglePlay = async () => {
    const audio = audioRef.current
    if (!audio) return
    if (audio.paused) {
      await audio.play()
      setShowIntro(false)
    } else {
      audio.pause()
    }
  }

  const toggleMute = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.muted = !audio.muted
    setMuted(audio.muted)
  }

  if (missing) return null

  return (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center px-5 transition-all duration-500 ${
          showIntro
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/55 backdrop-blur-sm" />
        <button
          type="button"
          onClick={() => void start()}
          disabled={!ready}
          className="relative liquid-glass-rose rounded-[2rem] px-8 py-8 sm:px-10 sm:py-10 text-center max-w-sm w-full hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--rose)]/20 text-[var(--rose-soft)]">
            <Music2 className="h-6 w-6" />
          </span>
          <p className="font-display text-3xl sm:text-4xl text-white leading-tight">
            Включить музыку
          </p>
          <p className="mt-3 text-white/55 text-sm leading-relaxed">
            Нежный фон для приглашения — можно выключить в любой момент
          </p>
          <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--rose)] text-[#1a0f14] px-5 py-2.5 text-sm font-semibold">
            <Play className="h-4 w-4" fill="currentColor" />
            Начать
          </span>
        </button>
      </div>

      <div className="fixed bottom-5 right-5 sm:bottom-8 sm:right-8 z-40 flex items-center gap-2">
        <button
          type="button"
          onClick={toggleMute}
          aria-label={muted ? 'Включить звук' : 'Выключить звук'}
          className={`liquid-glass h-11 w-11 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-all ${
            playing ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {muted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>

        <button
          type="button"
          onClick={() => void togglePlay()}
          aria-label={playing ? 'Пауза' : 'Музыка'}
          className="liquid-glass-rose h-14 w-14 rounded-full flex items-center justify-center text-[var(--rose-soft)] shadow-lg hover:scale-105 transition-transform"
        >
          {playing ? (
            <span className="flex items-end gap-[3px] h-4" aria-hidden>
              <span className="eq-bar w-[3px] bg-current rounded-full" />
              <span className="eq-bar eq-bar-2 w-[3px] bg-current rounded-full" />
              <span className="eq-bar eq-bar-3 w-[3px] bg-current rounded-full" />
            </span>
          ) : (
            <Play className="h-5 w-5 ml-0.5" fill="currentColor" />
          )}
        </button>
      </div>
    </>
  )
}
