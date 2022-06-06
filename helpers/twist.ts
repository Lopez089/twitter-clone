import { twist } from '../interface/twit'

export const twistFaker: twist = {
  avatar: 'https://i.pravatar.cc/300',
  userName: 'ThePrimeagen',
  userAlias: '@ThePrimeagen',
  id: 2342123131,
  date: 'Sat Jun 04 2022 08:25:26',
  twist: 'Oh so you know binary? Name every symbol then',
  answersNumber: 5,
  retweets: 20,
  isRetweets: false,
  isLike: false,
  like: 57
}

export const twistFakerIsRetweets = { ...twistFaker, isRetweets: true }
export const twistFakerIsLike = { ...twistFaker, isLike: true }
