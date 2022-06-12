export interface twist {
    avatar?: string,
    userName: string,
    userAlias: string,
    id: number,
    date: number,
    twist: string,
    answersNumber: number,
    retweets: number,
    isRetweets: boolean
    isLike: boolean,
    like: number,
}

export interface twists {
    twists: twist[]
}

export type avatar = Omit<twist, 'userAlias', 'id', 'date', 'twist', 'answersNumber', 'retweets', 'isRetweets', 'isLike', 'like'>
