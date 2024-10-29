import { Column, Entity, ManyToOne } from 'typeorm';
import { PostEntity, UserEntity } from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('PostFavorite')
export class PostFavoriteEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.postFavorites)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: string;

  @ManyToOne(() => PostEntity, (post) => post.postFavorites)
  post: PostEntity;

  @Column()
  @Exclude()
  postId: string;
}
