import { RoleType } from "@/interfaces";

export interface PostSignInRequest {
  userName: string;
  password: string;
}

export interface PostSignUpRequest {
  userName: string;
  password: string;
}

export interface GetUserRequest {
  id: string;
  userName: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  name: string;
  role: RoleType;
}
