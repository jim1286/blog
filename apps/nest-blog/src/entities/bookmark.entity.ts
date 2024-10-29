import { Column, Entity, ManyToOne } from 'typeorm';
import { PostEntity, UserEntity } from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('Bookmark')
export class BookmarkEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.bookmarks)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: string;

  @ManyToOne(() => PostEntity, (post) => post.bookmarks)
  post: UserEntity;

  @Column()
  @Exclude()
  postId: string;
}
