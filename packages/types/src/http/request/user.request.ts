import { RoleType, TokenPayload } from "@/interfaces";

export interface PostSignInRequest {
  userName: string;
  password: string;
}

export type PostSignUpRequest = PostSignInRequest;

export type GetUserRequest = TokenPayload;

export interface CreateUserRequest extends PostSignInRequest {
  name: string;
  role: RoleType;
}
