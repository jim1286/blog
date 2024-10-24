import { JwtTokens, User } from "@/interface";

export interface CreateUserResponse extends User {}

export interface PostSignInResponse extends JwtTokens {}

export interface GetUserResponse extends User {}
