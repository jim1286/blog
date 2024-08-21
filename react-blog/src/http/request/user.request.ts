import { RoleEnum } from "@/enums";

export interface CreateUserRequest {
  username: string;
  password: string;
  name: string;
  role: RoleEnum;
}
