import type { NextPage } from 'next'
import { Twist } from '../components/twist/index'
import { twistFaker } from '../helpers/twist'

const Home: NextPage = () => {
  return (
    <div className="m-4 flex gap-1 flex-col">
      <Twist
        avatar={twistFaker.avatar}
        userName={twistFaker.userName}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={'5h'}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isLike={true}
        isRetweets={twistFaker.isRetweets}
        like={twistFaker.like}
      />
      <Twist
        userName={'Juan Lopez'}
        userAlias={twistFaker.userAlias}
        id={twistFaker.id}
        date={'3d'}
        twist={twistFaker.twist}
        answersNumber={twistFaker.answersNumber}
        retweets={twistFaker.retweets}
        isLike={true}
        isRetweets={twistFaker.isRetweets}
        like={twistFaker.like}
      />
    </div>
  )
}

export default Home
