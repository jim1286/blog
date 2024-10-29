import { RoleType, TokenPayload } from "@/interfaces";

export interface PostSignInRequest {
  userName: string;
  password: string;
}

export interface PostCheckUserNameRequest {
  userName: string;
}

export interface PostSignUpRequest extends PostSignInRequest {
  thumbnail?: File;
}

export type GetUserRequest = TokenPayload;
