import { Expose } from "class-transformer";
import {Entity as ToEntity, Column, Index, ManyToOne, JoinColumn, BeforeInsert, OneToMany} from "typeorm";
import { makeId, slugify } from "../utils/helpers";
import Entity from './Entity'
import Post from "./Post";
import User from "./User";

@ToEntity("subs")
export default class Sub extends Entity{
    constructor(sub: Partial<Sub>){
        super()
        Object.assign(this, sub)
    }

    @Index()
    @Column({unique: true})
    name: string;

    @Column()
    title: string;

    @Column({type: 'text', nullable: true})
    description: string

    @Column({ nullable: true})
    imageUrn: string

    @Column({ nullable: true})
    bannerUrn: string
    
    @Column()
    username: string

    @ManyToOne(() => User)
    @JoinColumn({ name: 'username', referencedColumnName:'username'})
     user: User;

    @OneToMany(() => Post, post => post.sub)
    posts: Post[]

    @Expose()
    get imageUrl(): string {
        return this.imageUrn ? `${process.env.APP_URL}/images/${this.imageUrn}`
        : 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y'
    }

    @Expose()
    get bannerUrl(): string {
        return this.bannerUrn ? `${process.env.APP_URL}/images/${this.bannerUrn}`
        : undefined
    }
}
