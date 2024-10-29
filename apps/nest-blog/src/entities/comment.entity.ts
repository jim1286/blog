import { Column, Entity, ManyToOne, OneToMany } from 'typeorm';
import { CommentFavoriteEntity, PostEntity, UserEntity } from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('Comment')
export class CommentEntity extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => UserEntity, (user) => user.comments)
  user: UserEntity;

  @Column()
  @Exclude()
  userId: string;

  @ManyToOne(() => PostEntity, (user) => user.comments)
  post: PostEntity;

  @Column()
  @Exclude()
  postId: string;

  @ManyToOne(() => CommentEntity, (comment) => comment.children)
  parent: CommentEntity;

  @Column({ nullable: true })
  @Exclude()
  parentId: string;

  @OneToMany(() => CommentEntity, (comment) => comment.parent)
  children: CommentEntity[];

  @OneToMany(
    () => CommentFavoriteEntity,
    (commentFavorite) => commentFavorite.comment,
  )
  commentFavorites: CommentFavoriteEntity[];
}
