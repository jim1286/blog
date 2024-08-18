import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreatePostRequestDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  content: string;

  @IsArray()
  tags: string[];
}

export class UpdatePostRequestDto {
  @IsString()
  title: string;

  @IsString()
  @IsOptional()
  subTitle: string;

  @IsString()
  content: string;
}
