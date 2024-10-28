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
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import {
  CreatePostRequest,
  MessageResponse,
  PostEntityResponse,
  UpdatePostRequest,
} from '@blog/types';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOperation({ summary: 'Create a new post' })
  @ApiResponse({
    status: 201,
    description: 'Post successfully created.',
  })
  async createPost(
    @Body(ValidationPipe) body: CreatePostRequest,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.createPost(body, userId);
  }

  @Get('/list')
  @UseGuards(JwtAuthGuard)
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
  @UseGuards(JwtAuthGuard)
  async deletePost(
    @Query('postId') postId: string,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.deletePostByPostId(postId, userId);
  }

  @Put('/')
  @UseGuards(JwtAuthGuard)
  async updatePost(
    @Body(ValidationPipe) body: UpdatePostRequest,
    @Query('postId') postId: string,
    @GetUser('id') userId: string,
  ): Promise<MessageResponse> {
    return await this.postService.updatePostByPostId(body, postId, userId);
  }
}
