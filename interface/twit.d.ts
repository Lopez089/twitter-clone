export interface twist {
    avatar?: string,
    userName: string,
    userAlias: string,
    id: number,
    date: string,
    twist: string,
    answers: number,
    retweets: boolean,
    isLike: boolean,
    like: number,
}

export type avatar = Omit<twist, 'userAlias', 'id', 'date', 'twist', 'answers', 'retweets', 'isLike', 'like'>
