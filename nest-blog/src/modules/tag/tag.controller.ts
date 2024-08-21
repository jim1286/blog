import { Controller, Get, Query } from '@nestjs/common';
import { TagService } from './tag.service';
import { PostEntityResponse, TagEntityResponse } from '@/http';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('tag')
@Controller('tag')
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/list')
  async getTagList(
    @Query('postId') postId: string,
  ): Promise<TagEntityResponse[]> {
    return await this.tagService.getTagListByPostId(postId);
  }

  @Get('/list/post')
  async getPostList(
    @Query('tagContent') tagContent: string,
  ): Promise<PostEntityResponse[]> {
    return await this.tagService.getPostListByTagContent(tagContent);
  }
}
