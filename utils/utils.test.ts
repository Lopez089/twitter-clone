import { userInitials } from './utils'

describe('function userInicial', () => {
  test('receive a username of one words and return an initial', () => {
    const userName = 'Lopez089'

    const inicial = userInitials(userName)

    expect(inicial).toBe('L')
  })

  test('receive a username of two words and return two initial', () => {
    const userName = 'Juan Lopez'

    const inicial = userInitials(userName)

    expect(inicial).toBe('JL')
  })

  test('receive a username of three words and return two initial', () => {
    const userName = 'Juan Lopez Aragon'

    const inicial = userInitials(userName)

    expect(inicial).toBe('JL')
  })

  test('receive a userName in uppercase and return inicial in lowercase', () => {
    const userName = 'juan lopez Aragon'

    const inicial = userInitials(userName)

    expect(inicial).toBe('JL')
  })

  test('receive a usernam of one word uppercase and return a inicial in lowercase', () => {
    const userName = 'juan'

    const inicial = userInitials(userName)

    expect(inicial).toBe('J')
  })
})
