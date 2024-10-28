import { JwtTokens } from "@/interfaces";
import { UserEntityResponse } from "..";

export type CreateUserResponse = UserEntityResponse;

export type PostSignInResponse = JwtTokens;

export type GetUserResponse = UserEntityResponse;
