import { userInitials, getTimeAgo } from './utils'

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

describe('timeAgo', () => {
  // TODO:
  // hace 2 años

  test('receive timestamp to 3s and return hace 3 s', () => {
    const dateNow: number = Date.now()
    const timeShow: number = 3
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 3 s')
  })

  test('receive timestamp to 6min and return hace 6 min', () => {
    const dateNow: number = Date.now()
    const timeShow: number = 6 * 60
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 6 min')
  })

  test('receive timestamp to 5horas and return hace 5 h', () => {
    const dateNow: number = Date.now()
    const timeShow: number = 6 * 60 * 60
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 6 h')
  })

  test('receive timestamp to 3 dias and return hace 3 d', () => {
    const dateNow: number = Date.now()
    const timeShow: number = (24 * 3) * 60 * 60
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 3 días')
  })

  test('receive timestamp to 2 semana and return hace 2 sem.', () => {
    const dateNow: number = Date.now()
    const timeShow: number = (24 * 14) * 60 * 60
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 2 sem.')
  })

  test('receive timestamp to 8meses and return hace 8 m', () => {
    const dateNow: number = Date.now()
    const timeShow: number = ((24 * 30) * 8) * 60 * 60
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 8 m')
  })

  test('receive timestamp to 2 años and return hace 2 a', () => {
    const dateNow: number = Date.now()
    const timeShow: number = (((24 * 30) * 12) * 60 * 60) * 2
    const timestamp = (dateNow - (timeShow * 1000))
    expect(getTimeAgo(timestamp)).toBe('hace 2 a')
  })
})
