import { twist, avatar } from '../../interface/twit'
import { userInitials, getTimeAgo } from '../../utils/utils'
import { AiOutlineRetweet, AiOutlineHeart } from 'react-icons/ai'
import { IconContext } from 'react-icons'
import { IoChatbubbleOutline } from 'react-icons/io5'

export const Avatar = ({ avatar, userName }: { avatar: avatar, userName: string }) => {
  return (
    avatar
      ? <img
        src={avatar}
        alt={userName}
        className='rounded-full w-24 '
      />
      : <div
        className='rounded-full w-20 h-20 bg-blue-500 flex justify-center items-center text-2xl font-bold text-white'
      > {userInitials(userName)} </div>
  )
}

export const Twist = ({
  avatar,
  userName,
  userAlias,
  date,
  twist,
  answersNumber,
  retweets,
  isRetweets,
  isLike,
  like
}: twist) => {
  return (
    <article role='twits' className='border-2 border-gray-300s rounded p-5 flex max-w-lg'>
      <section className='mr-2' >
        <Avatar avatar={avatar} userName={userName} />
      </section >
      <section>
        <div className='flex gap-1'>
          <p className='font-semibold'>{userName}</p>
          <p className='font-light text-gray-400'>{userAlias}</p>
          <p className='font-light text-gray-400'>·</p>
          <p className='font-light text-gray-400'>{getTimeAgo(date)}</p>
        </div>
        <div>
          <p className='font-light'>
            {twist}
          </p>
        </div>
        <section className='flex align-center justify-between mt-2 font-light text-gray-400'>
          <div className='flex items-center gap-1'>
            <IoChatbubbleOutline />
            <p>{answersNumber}</p>
          </div>
          <div className='flex items-center gap-1'>
            <IconContext.Provider value={{ className: `${isRetweets ? 'text-blue-600' : null}` }}>
              <AiOutlineRetweet data-testid='retweets' />
            </IconContext.Provider>
            <p>{retweets}</p>
          </div>
          <div className='flex items-center gap-1'>
            <IconContext.Provider value={{ className: `${isLike ? 'text-red-600' : null}` }}>
              <AiOutlineHeart data-testid='like' />
            </IconContext.Provider>
            <p>{like}</p>
          </div>
        </section>
      </section>
      <section className='pl-10'>
        ...
      </section>
    </article >
  )
}
