import { JwtAuthGuard } from '@/guards';
import { Controller, Get, Param, UseGuards } from '@nestjs/common';
import { TagService } from './tag.service';
import { PostEntityResponse, TagEntityResponse } from '@/http';

@Controller('tag')
@UseGuards(JwtAuthGuard)
export class TagController {
  constructor(private readonly tagService: TagService) {}

  @Get('/:postId')
  async getTagList(
    @Param('postId') postId: string,
  ): Promise<TagEntityResponse[]> {
    return await this.tagService.getTagListByPostId(postId);
  }

  @Get('/2/:tagContent')
  async getPostList(
    @Param('tagContent') tagContent: string,
  ): Promise<PostEntityResponse[]> {
    return await this.tagService.getPostListByTagContent(tagContent);
  }
}
