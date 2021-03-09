export interface Post {
    identifier: string
    title: string
    slug: string
    subName: string
    createdAt: string
    updayedAt: string
    body?: string
    username: string
    //virtual fields
    url: string
    voteScore?: number
    commentCount?: number
    userVote?: number
}