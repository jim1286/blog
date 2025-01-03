import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CommentRepository } from './comment.repository';
import { PostService } from '../post/post.service';
import { UserService } from '../user/user.service';
import {
  CreateCommentRequest,
  MessageResponse,
  CommentEntityResponse,
  CreateCommentReplyRequest,
} from '@blog/types';

@Injectable()
export class CommentService {
  constructor(
    private readonly postService: PostService,
    private readonly userService: UserService,
    private readonly commentRepository: CommentRepository,
  ) {}

  async createComment(
    userId: string,
    body: CreateCommentRequest,
  ): Promise<MessageResponse> {
    const { postId, content } = body;
    const post = await this.postService.getPostByPostId(postId);
    const user = await this.userService.getUserByUserId(userId);
    const newComment = this.commentRepository.create({
      post,
      user,
      parent: null,
      parentId: null,
      content,
    });

    try {
      await this.commentRepository.save(newComment);
      return { message: '댓글 생성 완료' };
    } catch (error) {
      throw new Error('댓글 생성 실패');
    }
  }

  async createReply(
    userId: string,
    body: CreateCommentReplyRequest,
  ): Promise<MessageResponse> {
    const { postId, commentId, content } = body;
    const post = await this.postService.getPostByPostId(postId);
    const user = await this.userService.getUserByUserId(userId);
    const comment = await this.getCommentByCommentId(commentId);

    if (!comment) {
      throw new NotFoundException('댓글이 존재하지 않습니다.');
    }

    const newComment = this.commentRepository.create({
      post,
      user,
      parent: comment,
      content,
    });

    try {
      await this.commentRepository.save(newComment);
      return { message: '대댓글 생성 완료' };
    } catch (error) {
      throw new Error('대댓글 생성 실패');
    }
  }

  async getCommentByCommentId(
    commentId: string,
  ): Promise<CommentEntityResponse> {
    return await this.commentRepository.getCommentByCommentId(commentId);
  }

  async getCommentListByPostId(
    postId: string,
  ): Promise<CommentEntityResponse[]> {
    return await this.commentRepository.getCommentListWithReplyByPostId(postId);
  }

  async deleteComment(
    userId: string,
    commentId: string,
  ): Promise<MessageResponse> {
    const comment =
      await this.commentRepository.getCommentByCommentId(commentId);

    if (userId !== comment.userId) {
      throw new UnauthorizedException('작성자만 댓글을 삭제할 수 있습니다.');
    }

    try {
      await this.commentRepository.deleteCommentByCommentId(commentId);
      return { message: '댓글 삭제 완료' };
    } catch (error) {
      throw new NotFoundException('댓글 삭제 실패');
    }
  }
}
