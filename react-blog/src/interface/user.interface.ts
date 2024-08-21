import { RoleEnum } from "@/enums";

export interface User {
  username: string;
  name: string;
  role: RoleEnum;
  isAutoRefresh: boolean;
  markedAt: Date;
  isActive: boolean;
  remindModelUnused: boolean;
}
