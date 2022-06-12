import { render, screen } from '@testing-library/react'
import { Timeline } from './index'
import { twistsUserFakerSix, twistsUserFakeEntry, twistsUserFakerTwenty } from '../../helpers/twist'
import '@testing-library/jest-dom'

describe('component timeline', () => {
  test('receive 6 twist the component return 6 twist', () => {
    const component = <Timeline twists={twistsUserFakerSix} />

    render(component)
    const allTwists = screen.getAllByRole('twits')
    expect(allTwists).toHaveLength(6)
  })

  test('not receive twist and component return message "El usuario aun no ha creado ningun twits" ', () => {
    const component = <Timeline twists={twistsUserFakeEntry} />

    render(component)
    screen.getByText('El usuario aun no ha creado ningun twits')
  })

  test('receive 20 twits and return only 15 twists', () => {
    const component = <Timeline twists={twistsUserFakerTwenty} />

    render(component)
    const allTwists = screen.getAllByRole('twits')
    expect(allTwists).toHaveLength(15)
  })
})
