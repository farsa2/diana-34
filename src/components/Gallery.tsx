import { useState } from 'react'
import { GALLERY } from '../data'

export function Gallery() {
  const [active, setActive] = useState(0)

  return (
    <section id="gallery" className="relative px-5 sm:px-6 md:px-12 lg:px-16 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8 sm:mb-12">
          <div>
            <p className="text-[var(--rose)] text-xs sm:text-sm tracking-[0.25em] uppercase">
              атмосфера
            </p>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl text-white mt-3 leading-[1.05]">
              Место, где встретимся
            </h2>
          </div>
          <p className="text-white/55 text-sm sm:text-base max-w-sm md:text-right leading-relaxed">
            Бассейн, терраса и вид на долину — тихий фон для тёплого дня.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[2rem] aspect-[4/5] sm:aspect-[16/10] bg-black/40">
          {GALLERY.map((item, index) => (
            <figure
              key={item.src}
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                index === active
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-105 pointer-events-none'
              }`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="h-full w-full object-cover"
                loading={index === 0 ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              <figcaption className="absolute bottom-5 left-5 right-5 sm:bottom-8 sm:left-8">
                <p className="font-display text-2xl sm:text-3xl text-white">
                  {item.caption}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-4 sm:mt-5 grid grid-cols-3 gap-3 sm:gap-4">
          {GALLERY.map((item, index) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(index)}
              aria-label={item.caption}
              className={`relative overflow-hidden rounded-2xl aspect-[4/3] transition-all duration-300 ${
                index === active
                  ? 'ring-2 ring-[var(--rose)] ring-offset-2 ring-offset-[var(--ink)]'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={item.src}
                alt=""
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
