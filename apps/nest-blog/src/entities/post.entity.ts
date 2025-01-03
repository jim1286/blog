import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import {
  BookmarkEntity,
  CommentEntity,
  PostFavoriteEntity,
  TagEntity,
  UserEntity,
} from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('Post')
export class PostEntity extends BaseEntity {
  @Column()
  title: string;

  @Column({ nullable: true })
  subTitle: string;

  @Column()
  content: string;

  @Column({ nullable: true })
  thumbnailUrl: string;

  @ManyToOne(() => UserEntity, (user) => user.posts)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: string;

  @OneToMany(() => TagEntity, (tag) => tag.post)
  tags: TagEntity[];

  @OneToMany(() => CommentEntity, (comment) => comment.post)
  comments: CommentEntity[];

  @OneToMany(() => BookmarkEntity, (bookMark) => bookMark.post)
  bookmarks: BookmarkEntity[];

  @OneToMany(() => PostFavoriteEntity, (postFavorite) => postFavorite.post)
  postFavorites: PostFavoriteEntity[];
}
