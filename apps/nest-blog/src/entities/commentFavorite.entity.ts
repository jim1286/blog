import { Column, Entity, ManyToOne } from 'typeorm';
import { CommentEntity, UserEntity } from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('CommentFavorite')
export class CommentFavoriteEntity extends BaseEntity {
  @ManyToOne(() => UserEntity, (user) => user.commentFavorites)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: string;

  @ManyToOne(() => CommentEntity, (comment) => comment.commentFavorites)
  comment: CommentEntity;

  @Column()
  @Exclude()
  commentId: string;
}
