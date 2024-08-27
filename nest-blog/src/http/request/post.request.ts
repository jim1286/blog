import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostRequestDto {
  @IsString()
  @ApiProperty({
    description: 'The title of the post',
    example: 'My first blog post',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The subtitle of the post',
    example: 'A brief introduction to my blog',
  })
  subTitle?: string;

  @IsString()
  @ApiProperty({
    description: 'The main content of the post',
    example: 'This is the content of my first post...',
  })
  content: string;

  @IsArray()
  @ApiProperty({
    description: 'List of tags associated with the post',
    example: ['nestjs', 'typescript', 'swagger'],
  })
  tags: string[];
}

export class UpdatePostRequestDto {
  @IsString()
  @ApiProperty({
    description: 'The title of the post',
    example: 'Updated blog post title',
  })
  title: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    description: 'The subtitle of the post',
    example: 'An updated subtitle for the blog post',
  })
  subTitle?: string;

  @IsString()
  @ApiProperty({
    description: 'The main content of the post',
    example: 'This is the updated content of the post...',
  })
  content: string;
}
