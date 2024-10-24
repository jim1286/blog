import {
  ApiResponse,
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
  PostSignInRequest,
  PostSignInResponse,
} from "@/http";
import { axiosInstance } from ".";

const USER_URI = "/user";

export const createUser = async (
  params: CreateUserRequest
): Promise<CreateUserResponse> => {
  const uri = `${USER_URI}`;
  const res: ApiResponse = await axiosInstance.post(uri, params);

  return res.data;
};

export const getUser = async (): Promise<GetUserResponse> => {
  const uri = `${USER_URI}`;
  const res: ApiResponse = await axiosInstance.get(uri);

  return res.data;
};

export const postSignIn = async (
  params: PostSignInRequest
): Promise<PostSignInResponse> => {
  const uri = `${USER_URI}/signin`;
  const res: ApiResponse = await axiosInstance.post(uri, params);

  return res.data;
};
