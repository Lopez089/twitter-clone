import type { NextPage } from 'next'
import { Twist } from '../components/twist/index'
import { twistFaker } from '../helpers/twist'

const Home: NextPage = () => {
  return (
    <>
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
    </>
  )
}

export default Home
