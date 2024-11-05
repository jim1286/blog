import { PostEntity } from '@/entities';
import { UpdatePostRequest } from '@blog/types';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class PostRepository extends Repository<PostEntity> {
  constructor(dataSource: DataSource) {
    super(PostEntity, dataSource.createEntityManager());
  }

  async getPostListAll() {
    const queryBuilder: SelectQueryBuilder<PostEntity> =
      this.createQueryBuilder('post');

    return await queryBuilder
      .leftJoinAndSelect('post.user', 'user')
      .leftJoinAndSelect('post.postFavorites', 'postFavorites')
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  async getPostByPostId(postId: string) {
    const queryBuilder: SelectQueryBuilder<PostEntity> =
      this.createQueryBuilder('post');

    return await queryBuilder
      .where('post.id = :postId', { postId })
      .leftJoinAndSelect('post.user', 'user')
      .leftJoinAndSelect('post.tags', 'tags')
      .leftJoinAndSelect('post.postFavorites', 'postFavorites')
      .getOne();
  }

  async deletePostByPostId(postId: string) {
    const queryBuilder: SelectQueryBuilder<PostEntity> =
      this.createQueryBuilder('post');

    await queryBuilder
      .softDelete()
      .where('post.id = :postId', { postId })
      .execute();
  }

  async getPostListByUserId(userId: string) {
    const queryBuilder: SelectQueryBuilder<PostEntity> =
      this.createQueryBuilder('post');

    return await queryBuilder
      .leftJoinAndSelect('post.user', 'user')
      .where('post.user.id = :userId', { userId })
      .leftJoinAndSelect('post.postFavorites', 'postFavorites')
      .orderBy('post.createdAt', 'DESC')
      .getMany();
  }

  async updatePostByPostId(body: UpdatePostRequest, postId: string) {
    const queryBuilder: SelectQueryBuilder<PostEntity> =
      this.createQueryBuilder('post');

    // await queryBuilder
    //   .update(PostEntity)
    //   .set(body)
    //   .where('post.id = :postId', { postId })
    //   .execute();
  }
}
