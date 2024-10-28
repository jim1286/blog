import { JwtAuthGuard } from '@/guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CommentService } from './comment.service';
import { GetUser } from '@/decorators';
import { ApiTags } from '@nestjs/swagger';
import {
  CreateCommentRequest,
  MessageResponse,
  CommentEntityResponse,
} from '@blog/types';

@ApiTags('comment')
@Controller('comment')
@UseGuards(JwtAuthGuard)
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/create')
  async createComment(
    @Body(ValidationPipe) body: CreateCommentRequest,
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.createComment(postId, userId, body);
  }

  @Post('/create/reply')
  async createReply(
    @Body(ValidationPipe) body: CreateCommentRequest,
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
    @Query('commentId') commentId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.createReply(
      postId,
      userId,
      commentId,
      body,
    );
  }

  @Get('/list')
  async getCommentList(
    @Query('postId') postId: string,
  ): Promise<CommentEntityResponse[]> {
    return await this.commentService.getCommentListByPostId(postId);
  }

  @Delete('/')
  async deleteComment(
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
    @Query('commentId') commentId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.deleteComment(userId, postId, commentId);
  }

  @Delete('/reply')
  async deleteReply(
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
    @Query('commentId') commentId: string,
    @Query('replyId') replyId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.deleteReply(
      userId,
      postId,
      commentId,
      replyId,
    );
  }
}
