export interface CreatePostRequest {
  title: string;
  subTitle?: string;
  content: string;
  tags: string[];
  thumbnail?: File;
}

export type UpdatePostRequest = CreatePostRequest;
