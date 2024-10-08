import { JwtAuthGuard } from '@/guards';
import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { CommentFavoriteService } from './comment-favorite.service';
import { GetUser } from '@/decorators';
import { CommentFavoriteEntityResponse, MessageResponse } from '@/http';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('comment-favorite')
@Controller('comment-favorite')
@UseGuards(JwtAuthGuard)
export class CommentFavoriteController {
  constructor(
    private readonly commentFavoriteService: CommentFavoriteService,
  ) {}

  @Post('/')
  async updateCommentFavorite(
    @GetUser('id') userId: string,
    @Query('commentId') commentId: string,
  ): Promise<MessageResponse> {
    return await this.commentFavoriteService.updateCommentFavorite(
      userId,
      commentId,
    );
  }

  @Get('/list')
  async getCommentFavoriteList(
    @GetUser('id') userId: string,
  ): Promise<CommentFavoriteEntityResponse[]> {
    return await this.commentFavoriteService.getCommentFavoriteListByUserId(
      userId,
    );
  }
}
