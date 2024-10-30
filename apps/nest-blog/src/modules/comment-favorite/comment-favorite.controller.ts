import { JwtAuthGuard } from '@/guards';
import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { CommentFavoriteService } from './comment-favorite.service';
import { GetUser } from '@/decorators';
import { ApiTags } from '@nestjs/swagger';
import {
  CommentFavoriteEntityResponse,
  MessageResponse,
  UpdateCommentFavoriteRequest,
} from '@blog/types';

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
    @Body(ValidationPipe) body: UpdateCommentFavoriteRequest,
  ): Promise<MessageResponse> {
    return await this.commentFavoriteService.updateCommentFavorite(
      userId,
      body,
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
