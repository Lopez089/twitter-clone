import { DATE_UNITS } from '../constants/constants'

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

export const getSecondsDiff = (timestamp: number) => (Date.now() - timestamp) / 1000

const getUnitAndValueDate = (secondsElapsed: number): { value: number, unit: string } => {
  for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
    if (secondsElapsed >= secondsInUnit || unit === 'second') {
      const value = Math.floor(secondsElapsed / secondsInUnit) * -1
      return { value, unit }
    }
  }
}

export const getTimeAgo = (timestamp: number): string => {
  const rtf = new Intl.RelativeTimeFormat('es', {
    style: 'narrow'
  })

  const secondsElapsed: number = getSecondsDiff(timestamp)
  const { value, unit }: { value: number, unit: string } = getUnitAndValueDate(secondsElapsed)

  return rtf.format(value, unit)
}
