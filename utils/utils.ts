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
