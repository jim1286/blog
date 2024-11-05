import { CommentEntity } from '@/entities';
import { Injectable } from '@nestjs/common';
import { DataSource, Repository, SelectQueryBuilder } from 'typeorm';

@Injectable()
export class CommentRepository extends Repository<CommentEntity> {
  constructor(dataSource: DataSource) {
    super(CommentEntity, dataSource.createEntityManager());
  }

  async getCommentListWithReplyByPostId(postId: string) {
    const queryBuilder: SelectQueryBuilder<CommentEntity> =
      this.createQueryBuilder('comment');

    return await queryBuilder
      .leftJoinAndSelect('comment.user', 'user')
      .leftJoinAndSelect('comment.children', 'children')
      .leftJoinAndSelect('children.user', 'childrenUser')
      .leftJoinAndSelect(
        'children.commentFavorites',
        'childrenCommentFavorites',
      )
      .leftJoinAndSelect('comment.commentFavorites', 'commentFavorites')
      .where('comment.postId = :postId', { postId })
      .andWhere('comment.parentId IS NULL')
      .orderBy('comment.createdAt', 'DESC')
      .addOrderBy('children.createdAt', 'DESC')
      .getMany();
  }

  async getCommentByCommentId(commentId: string) {
    const queryBuilder: SelectQueryBuilder<CommentEntity> =
      this.createQueryBuilder('comment');

    return await queryBuilder
      .where('comment.id = :commentId', { commentId })
      .getOne();
  }

  async getCommentWithReplyByCommentIdAndPostId(
    postId: string,
    commentId: string,
  ) {
    const queryBuilder: SelectQueryBuilder<CommentEntity> =
      this.createQueryBuilder('comment');

    return await queryBuilder
      .leftJoinAndSelect('comment.children', 'children')
      .where('comment.id = :commentId', { commentId })
      .andWhere('comment.postId = :postId', { postId })
      .getOne();
  }

  async deleteCommentByCommentId(commentId: string) {
    const queryBuilder: SelectQueryBuilder<CommentEntity> =
      this.createQueryBuilder('comment');

    return await queryBuilder
      .softDelete()
      .where('comment.id = :commentId', { commentId })
      .execute();
  }

  async deleteReplyByReplyId(replyId: string) {
    const queryBuilder: SelectQueryBuilder<CommentEntity> =
      this.createQueryBuilder('comment');

    return await queryBuilder
      .softDelete()
      .where('comment.id = :replyId', { replyId })
      .execute();
  }
}
