import { BaseResponse } from './../base.response';
import { UserEntityResponse } from './user.response';

export interface PostEntityResponse extends BaseResponse {
  title: string;
  subTitle?: string;
  content: string;
  userId: string;
  user: UserEntityResponse;
}
