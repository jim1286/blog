export interface LoginFormInfoType {
  id: string;
  password: string;
}

export interface LoginFormValidateType {
  id: InputValidType;
  password: InputValidType;
}

export interface UserFormInfoType {
  username: string;
  name: string;
  password: string;
  passwordConfirm?: string;
  isActive: boolean;
}

export interface UserFormValidateType {
  username: InputValidType;
  name: InputValidType;
  password: InputValidType;
  passwordConfirm: InputValidType;
  role: InputValidType;
}

export type InputValidType = "valid" | "null" | "weak" | "space" | "incorrect";
