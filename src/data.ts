export const GUESTS = [
  { id: 'marina', name: 'Марина', vocative: 'Марина' },
  { id: 'sergey-t', name: 'Сергей Титовской', vocative: 'Сергей' },
  { id: 'sergey-r', name: 'Сергей Рябов', vocative: 'Сергей' },
  { id: 'anna', name: 'Анна', vocative: 'Анна' },
  { id: 'alexey', name: 'Алексей', vocative: 'Алексей' },
  { id: 'irina', name: 'Ирина', vocative: 'Ирина' },
  { id: 'ruslan', name: 'Руслан', vocative: 'Руслан' },
  { id: 'mama', name: 'Мама', vocative: 'Мама' },
] as const

export const EVENT = {
  title: 'Диана',
  age: 34,
  dateLabel: '31 июля 2026',
  dateShort: '31.07.2026',
  time: '11:00 — 21:00',
  place: 'Сочинская Барановка',
  address: 'СНТ Радуга, 150',
  format: 'Вечеринка',
  dressCode: 'Чёрный и розовый',
  telegram: 'zelenova_diana',
} as const

/** Пути с учётом base GitHub Pages (/diana-34/) */
export function assetUrl(path: string) {
  const base = import.meta.env.BASE_URL
  const normalized = path.replace(/^\//, '')
  return `${base}${normalized}`
}

export const GALLERY = [
  {
    src: assetUrl('gallery/pool.png'),
    alt: 'Бассейн с видом на город и горы',
    caption: 'Бассейн над долиной',
  },
  {
    src: assetUrl('gallery/terrace.png'),
    alt: 'Терраса с панорамным видом',
    caption: 'Панорама Барановки',
  },
  {
    src: assetUrl('gallery/lounge.png'),
    alt: 'Зона отдыха на террасе',
    caption: 'Место для разговоров',
  },
] as const

export function telegramAppUrl(guestName?: string, coming?: boolean) {
  const base = `tg://resolve?domain=${EVENT.telegram}`
  if (guestName == null || coming == null) return base
  return `${base}&text=${encodeURIComponent(rsvpMessage(guestName, coming))}`
}

export function rsvpMessage(guestName: string, coming: boolean) {
  const status = coming ? 'буду' : 'к сожалению, не смогу'
  return `Привет, Диана! Это ${guestName}. Я ${status} на твоём дне рождения 31.07.2026 🖤🩷`
}
