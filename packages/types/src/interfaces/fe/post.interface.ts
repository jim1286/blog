import { BaseInterface } from "../common";
import { User } from "./user.interface";

export interface Post extends BaseInterface {
  title: string;
  subTitle?: string;
  content: string;
  userId: string;
  user: User;
}
