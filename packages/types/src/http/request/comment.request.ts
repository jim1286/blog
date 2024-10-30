export interface CreateCommentRequest {
  postId: string;
  content: string;
}

export interface GetCommentListRequest {
  postId: string;
}
