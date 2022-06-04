import { render, screen } from '@testing-library/react'
import { Twist } from './index'
import '@testing-library/jest-dom'
import { twistFaker } from '../../helpers/twist'

describe('component twits', () => {
  test('receive an avatar and render the avatar', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    screen.getByAltText(twistFaker.userName)
  })

  test('does not receive avatar and returns the user`s initials', () => {
    const component = (
      <Twist
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    screen.getByText('T')
  })
  test('receive un username y return username', async () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)
    const userName = screen.getByText('ThePrimeagen')
    expect(userName).toBeInTheDocument()
  })
  test('receive a alias and show the alias', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const userAlia = screen.getByText('@ThePrimeagen')
    expect(userAlia).toBeInTheDocument()
  }
  )

  test('receive a twiteet and show the twiteet', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const twiteet = screen.getByText(twistFaker.twist)
    expect(twiteet).toBeInTheDocument()
  }
  )
  test('receive a date of creation y return the date what has been published', () => {
    const component =
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answers={twistFaker.answers}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />

    render(component)
    const TimeAgo = screen.getByText('5d')
    expect(TimeAgo).toBeInTheDocument()
  })
})

// le mando una imagen y renderiza la imagen
// no le mando la imagen y me renderiza iniciales del usuario
// recibe nombre de usuario y renderiza el usuario
// recibe un alia y muestra el alia y render
// ecibe un twits y mustra un twist
// -----recibe fecha de creacion y retorna el tiempo que lleva publicado
// recibe el numero de repustas y muestra el numero de respuestas
// recibe que el usuario retuiteo y muestra el icono rojo
// recibe que el usuario no retuiteo y muestra icono normalize
// recibe el numero de megusta del twit y muestra el numero de megusta que tienen
