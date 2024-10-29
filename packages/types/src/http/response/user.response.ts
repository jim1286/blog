import { JwtTokens } from "@/interfaces";
import { UserEntityResponse } from "..";

export type PostSignUpResponse = UserEntityResponse;

export type PostSignInResponse = JwtTokens;

export type GetUserResponse = UserEntityResponse;
