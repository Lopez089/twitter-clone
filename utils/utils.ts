import { DateTime, Interval } from 'luxon'

export const userInitials = (userName: string): string => {
  const separateWord: string[] = userName.split(' ')

  if (separateWord.length > 1) {
    let initial = ''
    initial += separateWord[0][0]
    initial += separateWord[1][0]

    return initial.toUpperCase()
  }

  return userName[0].toUpperCase()
}

// export const timeAgo = (): string | null => {
//   const now = DateTime.now()
//   const later = DateTime.local(2021, 1, 30)
//   const i = Interval.fromDateTimes(later, now)
//   console.log(i.length('days'))
//   const interval = DateTime.now().setLocale('es').plus({ days: -(i.length()) }).toRelativeCalendar()
//   return interval
// }

// // const dateFormat
