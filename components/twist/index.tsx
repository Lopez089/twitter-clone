import { twist, avatar } from '../../interface/twit'
import { userInitials } from '../../utils/utils'

export const Avatar = ({ avatar, userName }: avatar) => {
  return (
    avatar
      ? <img src={avatar} alt={userName} />
      : <div> {userInitials(userName)} </div>
  )
}

export const Twist = ({
  avatar,
  userName,
  userAlias,
  // id,
  // date,
  twist
  // answers,
  // retweets,
  // isLike,
  // like
}: twist) => {
  return (
    <article>
      <section>
        <Avatar avatar={avatar} userName={userName} />
      </section>
      <section>
        <div>
          <p>{userName}</p>
          <p>{userAlias}</p>
          <p></p>
        </div>
        <div>
          <p>
            {twist}
          </p>
        </div>
        <div>

        </div>
      </section>
      <section>

      </section>
    </article>
  )
}
