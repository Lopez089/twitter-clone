import { render, screen } from '@testing-library/react'
import { Twist } from './index'
import '@testing-library/jest-dom'
import { twistFaker, twistFakerIsRetweets, twistFakerIsLike } from '../../helpers/twist'

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
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
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
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
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
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
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
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
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
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const twiteet = screen.getByText(twistFaker.twist)
    expect(twiteet).toBeInTheDocument()
  }
  )

  test('receive numbers the answers and show the numbers the answers', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const answersNumber = screen.getByText(twistFaker.answersNumber)

    expect(answersNumber).toBeInTheDocument()
  })

  test('receive twist is Retweet y show icon blue ', () => {
    const component = (
      <Twist
        avatar={twistFakerIsRetweets.avatar}
        userName={twistFakerIsRetweets.userName}
        userAlias={twistFakerIsRetweets.userAlias}
        id={twistFakerIsRetweets.id}
        date={twistFakerIsRetweets.date}
        twist={twistFakerIsRetweets.twist}
        answersNumber={twistFakerIsRetweets.answersNumber}
        retweets={twistFakerIsRetweets.retweets}
        isRetweets={twistFakerIsRetweets.isRetweets}
        isLike={twistFakerIsRetweets.isLike}
        like={twistFakerIsRetweets.like}
      />)

    render(component)

    const iconRetweets = screen.getByTestId('retweets')

    expect(iconRetweets.classList.contains('text-blue-600')).toBe(true)
  })

  test('receive a twist is not Retweet y show icon normalize', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const iconRetweets = screen.getByTestId('retweets')

    expect(iconRetweets.classList.contains('text-blue-600')).toBe(false)
  })

  test('receive retweets numbers and show retwtees number', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const RetweetsNumber = screen.getByText(twistFaker.retweets)

    expect(RetweetsNumber).toBeInTheDocument()
  })

  test('receive like numbers and show like number', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const likeNumber = screen.getByText(twistFaker.like)

    expect(likeNumber).toBeInTheDocument()
  })

  test('receive a twist is like y show icon color red', () => {
    const component = (
      <Twist
        avatar={twistFakerIsLike.avatar}
        userName={twistFakerIsLike.userName}
        userAlias={twistFakerIsLike.userAlias}
        id={twistFakerIsLike.id}
        date={twistFakerIsLike.date}
        twist={twistFakerIsLike.twist}
        answersNumber={twistFakerIsLike.answersNumber}
        retweets={twistFakerIsLike.retweets}
        isRetweets={twistFakerIsLike.isRetweets}
        isLike={twistFakerIsLike.isLike}
        like={twistFakerIsLike.like}
      />)

    render(component)

    const iconRetweets = screen.getByTestId('like')

    expect(iconRetweets.classList.contains('text-red-600')).toBe(true)
  })

  test('receive a twist is not like y show icon normalize', () => {
    const component = (
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isRetweets={twistFaker.isRetweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />)

    render(component)

    const iconRetweets = screen.getByTestId('like')

    expect(iconRetweets.classList.contains('text-red-600')).toBe(false)
  })
  test('receive a date of creation y return the date what has been published', () => {
    const component =
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={twistFaker.date}
        twist={twistFaker.twist}
        isRetweets={twistFaker.isRetweets}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isLike={twistFaker.isLike}
        like={twistFaker.like}
      />

    render(component)
    const TimeAgo = screen.getByText('hace 2 a')
    expect(TimeAgo).toBeInTheDocument()
  })
})
