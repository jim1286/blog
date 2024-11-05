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
  CreateCommentReplyRequest,
} from '@blog/types';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  async createComment(
    @Body(ValidationPipe) body: CreateCommentRequest,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.createComment(userId, body);
  }

  @Post('/create/reply')
  @UseGuards(JwtAuthGuard)
  async createReply(
    @Body(ValidationPipe) body: CreateCommentReplyRequest,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.createReply(userId, body);
  }

  @Get('/list')
  async getCommentList(
    @Query('postId') postId: string,
  ): Promise<CommentEntityResponse[]> {
    return await this.commentService.getCommentListByPostId(postId);
  }

  @Delete('/')
  @UseGuards(JwtAuthGuard)
  async deleteComment(
    @GetUser('id') userId: string,
    @Query('commentId') commentId: string,
  ): Promise<MessageResponse> {
    return await this.commentService.deleteComment(userId, commentId);
  }

  @Delete('/reply')
  @UseGuards(JwtAuthGuard)
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
