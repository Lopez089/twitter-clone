import { useState, useEffect } from 'react'
import { Twist } from '../twist/index'
import { twist, twists } from '../../interface/twit'
import { AiTwotoneEdit } from 'react-icons/ai'
import { IconContext } from 'react-icons'

export const Timeline = ({ twists }: twists) => {
  const [twistsTimeline, setTwistsTimeline] = useState<twist[]>([])
  const twistNumber = twists.length

  useEffect(() => {
    if (twistNumber >= 15) {
      const twistFrist = twists.slice(0, 15)
      setTwistsTimeline(twistFrist)
    }
    if (twistNumber <= 15) {
      setTwistsTimeline(twists)
    }
  }, [])

  if (twistNumber === 0) {
    return (
      <section className='h-screen flex flex-col justify-center items-center'>
        <IconContext.Provider value={{ className: 'text-6xl text-gray-400' }}>
          <AiTwotoneEdit />
        </IconContext.Provider>
        <p className="mt-4 font-light text-gray-400">El usuario aun no ha creado ningun twits</p>
      </section>
    )
  }

  return (
    <section className='flex-col flex gap-1'>

      {
        twistsTimeline.map((twist: twist): any => (
          <Twist
            key={twist.id}
            avatar={twist.avatar}
            userName={twist.userName}
            userAlias={twist.userAlias}
            id={twist.id}
            date={twist.date}
            twist={twist.twist}
            answersNumber={twist.answersNumber}
            retweets={twist.retweets}
            isRetweets={twist.isRetweets}
            isLike={twist.isLike}
            like={twist.like}
          />
        ))
      }
    </section>

  )
}
