import { IsString, MaxLength, MinLength } from "class-validator";

export class PostSignInRequest {
  @IsString()
  userName: string;

  @IsString()
  password: string;
}

export class PostSignUpRequest {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  userName: string;

  @IsString()
  password: string;
}

export class GetUserRequest {
  @IsString()
  id: string;

  @IsString()
  userName: string;
}
