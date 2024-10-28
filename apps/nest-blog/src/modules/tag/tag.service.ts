import { Injectable } from '@nestjs/common';
import { TagRepository } from './tag.repository';
import { TagEntityResponse, PostEntityResponse } from '@blog/types';

@Injectable()
export class TagService {
  constructor(private readonly tagRepository: TagRepository) {}

  async getTagListByPostId(postId: string): Promise<TagEntityResponse[]> {
    return await this.tagRepository.getTagListByPostId(postId);
  }

  async getPostListByTagContent(
    tagContent: string,
  ): Promise<PostEntityResponse[]> {
    return (
      await this.tagRepository.getTagListWithPostByTagContent(tagContent)
    ).map((tag) => tag.post);
  }
}
