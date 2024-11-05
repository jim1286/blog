export interface LoginFormInfoType {
  userName: string;
  password: string;
}

export interface SignUpFormInfoType {
  userName: string;
  password: string;
  passwordConfirm: string;
  imageFile: File | null;
}

export interface CreatePostFormInfoType {
  title: string;
  subTitle: string;
  content: string;
  imageFile: File | null;
}

export interface LoginFormValidateType {
  userName: InputValidType;
  password: InputValidType;
}

export interface SignUpFormValidateType {
  userName: InputValidType;
  password: InputValidType;
  passwordConfirm: InputValidType;
  imageFile: InputValidType;
}

export interface CreatePostFormValidateType {
  title: InputValidType;
  subTitle: InputValidType;
  content: InputValidType;
  imageFile: InputValidType;
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

export type InputValidType =
  | "valid"
  | "null"
  | "weak"
  | "space"
  | "incorrect"
  | "duplicate";
