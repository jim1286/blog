import { JwtAuthGuard } from '@/guards';
import { Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { PostFavoriteService } from './post-favorite.service';
import { GetUser } from '@/decorators';
import { MessageResponse, PostFavoriteEntityResponse } from '@/http';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('post-favorite')
@Controller('post-favorite')
@UseGuards(JwtAuthGuard)
export class PostFavoriteController {
  constructor(private readonly postFavoriteService: PostFavoriteService) {}

  @Post('/')
  async updateFavorite(
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
  ): Promise<MessageResponse> {
    return await this.postFavoriteService.updateFavorite(userId, postId);
  }

  @Get('/')
  async getFavorite(
    @GetUser('id') userId: string,
    @Query('postId') postId: string,
  ): Promise<PostFavoriteEntityResponse> {
    return await this.postFavoriteService.getFavoriteByUserIdAndPostId(
      userId,
      postId,
    );
  }

  @Get('/list')
  async getFavoriteList(
    @GetUser('id') userId: string,
  ): Promise<PostFavoriteEntityResponse[]> {
    return await this.postFavoriteService.getFavoriteListByUserId(userId);
  }
}
