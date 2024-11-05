export interface CreateCommentRequest {
  postId: string;
  content: string;
}

export interface CreateCommentReplyRequest {
  postId: string;
  commentId: string;
  content: string;
}

export interface GetCommentListRequest {
  postId: string;
}

export interface DeleteCommentRequest {
  commentId: string;
}
