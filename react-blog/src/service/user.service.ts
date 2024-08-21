import {
  ApiResponse,
  CreateUserRequest,
  CreateUserResponse,
  GetUserResponse,
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
