import type { NextPage } from 'next'
import { Timeline } from '../components/timeline'
import { twistsUserFakerSix, twistsUserFakeEntry } from '../helpers/twist'

const Home: NextPage = () => {
  return (
    <div className="m-4 flex gap-1 flex-col">
      <Timeline twists={twistsUserFakeEntry} />
    </div>
  )
}

export default Home
