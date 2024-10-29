import { Column, Entity, ManyToOne } from 'typeorm';
import { PostEntity } from '.';
import { BaseEntity } from './base.entity';
import { Exclude } from 'class-transformer';

@Entity('Tag')
export class TagEntity extends BaseEntity {
  @Column()
  content: string;

  @ManyToOne(() => PostEntity, (post) => post.tags)
  post: PostEntity;

  @Column()
  @Exclude()
  postId: string;
}
