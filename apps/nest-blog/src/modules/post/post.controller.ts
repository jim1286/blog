import { JwtAuthGuard } from '@/guards';
import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { PostService } from './post.service';
import { GetUser } from '@/decorators';
import { ApiTags } from '@nestjs/swagger';
import {
  CreatePostRequest,
  MessageResponse,
  PostEntityResponse,
  UpdatePostRequest,
} from '@blog/types';
import { UtilStrategy } from '@/strategies';
import { FileInterceptor } from '@nestjs/platform-express';
import { extname } from 'path';
import { diskStorage } from 'multer';

@ApiTags('post')
@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post('/create')
  @UseGuards(JwtAuthGuard)
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          const uniqueSuffix = `${new UtilStrategy().getUUID()}${extname(file.originalname)}`;
          cb(null, uniqueSuffix);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  async createPost(
    @Body(ValidationPipe) body: CreatePostRequest,
    @GetUser('id') userId: string,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<MessageResponse> {
    return await this.postService.createPost(body, userId, file);
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
