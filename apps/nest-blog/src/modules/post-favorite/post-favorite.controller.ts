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
import { PostFavoriteService } from './post-favorite.service';
import { GetUser } from '@/decorators';
import { ApiTags } from '@nestjs/swagger';
import {
  MessageResponse,
  PostFavoriteEntityResponse,
  UpdatePostFavoriteRequest,
} from '@blog/types';

@ApiTags('post-favorite')
@Controller('post-favorite')
@UseGuards(JwtAuthGuard)
export class PostFavoriteController {
  constructor(private readonly postFavoriteService: PostFavoriteService) {}

  @Post('/')
  async updateFavorite(
    @GetUser('id') userId: string,
    @Body(ValidationPipe) body: UpdatePostFavoriteRequest,
  ): Promise<MessageResponse> {
    return await this.postFavoriteService.updateFavorite(userId, body);
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
