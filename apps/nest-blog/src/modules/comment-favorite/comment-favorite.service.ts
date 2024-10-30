import { Injectable } from '@nestjs/common';
import { CommentFavoriteRepository } from './comment-favoirte.repository';
import { UserService } from '../user/user.service';
import { CommentService } from '../comment/comment.service';
import {
  CommentFavoriteEntityResponse,
  MessageResponse,
  UpdateCommentFavoriteRequest,
} from '@blog/types';

@Injectable()
export class CommentFavoriteService {
  constructor(
    private readonly userService: UserService,
    private readonly commentService: CommentService,
    private readonly commentFavoriteRepository: CommentFavoriteRepository,
  ) {}

  async updateCommentFavorite(
    userId: string,
    body: UpdateCommentFavoriteRequest,
  ): Promise<MessageResponse> {
    const { commentId } = body;
    const commentFavorite =
      await this.commentFavoriteRepository.getCommentFavoriteByUserIdAndCommentId(
        userId,
        commentId,
      );

    if (commentFavorite) {
      try {
        await this.commentFavoriteRepository.deleteCommentFavoriteByUserIdAndCommentId(
          userId,
          commentId,
        );
        return { message: '댓글 좋아요 삭제 성공' };
      } catch (error) {
        throw new Error('댓글 좋아요 삭제 실패');
      }
    }

    const user = await this.userService.getUserByUserId(userId);
    const comment = await this.commentService.getCommentByCommentId(commentId);

    const newCommentFavorite = this.commentFavoriteRepository.create({
      user,
      comment,
    });

    try {
      await this.commentFavoriteRepository.save(newCommentFavorite);
      return { message: '댓글 좋아요 생성 성공' };
    } catch (error) {
      throw new Error('댓글 좋아요 생성 실패');
    }
  }

  async getCommentFavoriteListByUserId(
    userId: string,
  ): Promise<CommentFavoriteEntityResponse[]> {
    return await this.commentFavoriteRepository.getCommentFavoriteListByUserId(
      userId,
    );
  }
}
