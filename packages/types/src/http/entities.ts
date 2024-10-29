import { RoleType } from "../interfaces/common";

export interface BaseEntityResponse {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}

export interface BookmarkEntityResponse extends BaseEntityResponse {
  userId: string;
  postId: string;
}

export interface CommentEntityResponse extends BaseEntityResponse {
  content: string;
  userId: string;
  postId: string;
  parentId?: string;
  children: CommentEntityResponse[];
  commentFavorites: CommentFavoriteEntityResponse[];
}

export interface CommentFavoriteEntityResponse extends BaseEntityResponse {
  userId: string;
  commentId: string;
}

export interface PostEntityResponse extends BaseEntityResponse {
  title: string;
  subTitle?: string;
  content: string;
  user: UserEntityResponse;
  thumbNail: string;
}

export interface PostFavoriteEntityResponse extends BaseEntityResponse {
  userId: string;
  postId: string;
}

export interface TagEntityResponse extends BaseEntityResponse {
  content: string;
  postId: string;
}

export interface UserEntityResponse extends BaseEntityResponse {
  userName: string;
  thumbnailUrl?: string;
  role: RoleType;
}
