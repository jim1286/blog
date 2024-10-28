import { BaseInterface } from "../common";

export interface User extends BaseInterface {
  userName: string;
  thumbnailUrl?: string;
}
