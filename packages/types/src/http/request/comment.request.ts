import { IsString } from "class-validator";

export class CreateCommentRequest {
  @IsString()
  content: string;
}
