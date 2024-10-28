export interface CreatePostRequest {
  title: string;
  subTitle?: string;
  content: string;
  tags: string[];
}

export interface UpdatePostRequest {
  title: string;
  subTitle?: string;
  content: string;
}
