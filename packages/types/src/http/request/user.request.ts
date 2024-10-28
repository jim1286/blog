import { IsString } from "class-validator";

export class PostSignInRequest {
  @IsString()
  userName: string;

  @IsString()
  password: string;
}

export interface CreateUserRequest {
  username: string;
  password: string;
  name: string;
}
