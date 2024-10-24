import { BaseInterface } from "./base.interface";

export interface Post extends BaseInterface {
  title: string;
  subTitle?: string;
  content: string;
  userId: string;
}
