import { RoleType, TokenPayload } from "@/interfaces";

export interface PostSignInRequest {
  userName: string;
  password: string;
}

export interface PostSignUpRequest extends PostSignInRequest {
  thumbnail: File;
}

export type GetUserRequest = TokenPayload;

export interface CreateUserRequest extends PostSignInRequest {
  name: string;
  role: RoleType;
}
