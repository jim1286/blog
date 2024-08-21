import { RoleEnum } from "@/enums";

export interface PostSignInRequest {
  userName: string;
  password: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  name: string;
  role: RoleEnum;
}
