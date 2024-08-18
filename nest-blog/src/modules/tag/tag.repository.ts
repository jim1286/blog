import { TagEntity } from '@/entities';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class TagRepository extends Repository<TagEntity> {
  constructor(dataSource: DataSource) {
    super(TagEntity, dataSource.createEntityManager());
  }

  async getTagListByPostId(postId: string) {
    const queryBuilder: SelectQueryBuilder<TagEntity> =
      this.createQueryBuilder('tag');

    return await queryBuilder
      .where('tag.postId = :postId', {
        postId,
      })
      .orderBy('tag.createdAt', 'DESC')
      .getMany();
  }

  async getTagListWithPostByTagContent(tagContent: string) {
    const queryBuilder: SelectQueryBuilder<TagEntity> =
      this.createQueryBuilder('tag');

    return await queryBuilder
      .where('tag.content = :tagContent', {
        tagContent,
      })
      .leftJoinAndSelect('tag.post', 'post')
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }
}
