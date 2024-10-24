import { RoleEnum } from "@/enums";
import { BaseInterface } from "./base.interface";

export interface User extends BaseInterface {
  userName: string;
  thumbnailUrl?: string;
  role: RoleEnum;
}
