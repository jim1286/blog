import { JwtAuthGuard } from '@/guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { GetUser } from '@/decorators';
import {
  CreatePostRequestDto,
  MessageResponse,
  PostEntityResponse,
  UpdatePostRequestDto,
} from '@/http';

@Controller('post')
@UseGuards(JwtAuthGuard)
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  async createPost(
    @Body(ValidationPipe) body: CreatePostRequestDto,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.createPost(body, userId);
  }

  @Get('/list')
  async getPostList(
    @GetUser('id') userId: string,
  ): Promise<PostEntityResponse[]> {
    return await this.postService.getPostListByUserId(userId);
  }

  @Get('/list/all')
  async getPostListAll(): Promise<PostEntityResponse[]> {
    return await this.postService.getPostListAll();
  }

  @Get('/')
  async getPost(@Query('postId') postId: string): Promise<PostEntityResponse> {
    return await this.postService.getPostByPostId(postId);
  }

  @Delete('/')
  async deletePost(
    @Query('postId') postId: string,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.deletePostByPostId(postId, userId);
  }

  @Put('/')
  async updatePost(
    @Body(ValidationPipe) body: UpdatePostRequestDto,
    @Query('postId') postId: string,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.updatePostByPostId(body, postId, userId);
  }
}
