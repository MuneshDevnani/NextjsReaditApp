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

export interface User{
    username:string
    email:string
    createdAt:string
    updatedAt:string
}

export interface Sub {
    createdAt: String
    updatedAt: String
    name: string
    title: String
    description: String
    imageUrn: String
    bannerUrn: String
    username: String
    posts: Post[]
    //virtuals
    imageUrl: String
    bannerUrl: String
}