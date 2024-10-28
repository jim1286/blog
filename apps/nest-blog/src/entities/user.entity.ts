import { Column, Entity, OneToMany, Unique } from 'typeorm';
import {
  BookmarkEntity,
  CommentEntity,
  CommentFavoriteEntity,
  PostEntity,
  PostFavoriteEntity,
} from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';
import { RoleType } from '@blog/types';

@Entity('User')
@Unique(['userName'])
export class UserEntity extends BaseEntity {
  @Column()
  userName: string;

  @Column()
  @Exclude()
  password: string;

  @Column({ nullable: true })
  thumbnailUrl: string;

  @Column()
  role: RoleType;

  @OneToMany(() => PostEntity, (post) => post.user)
  posts: PostEntity[];

  @OneToMany(() => BookmarkEntity, (bookmark) => bookmark.user)
  bookmarks: BookmarkEntity[];

  @OneToMany(() => PostFavoriteEntity, (postFavorite) => postFavorite.user)
  postFavorites: PostFavoriteEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.user)
  comments: CommentEntity[];

  @OneToMany(
    () => CommentFavoriteEntity,
    (commentFavorite) => commentFavorite.user,
  )
  commentFavorites: CommentFavoriteEntity[];
}
