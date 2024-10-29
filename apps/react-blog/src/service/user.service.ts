import { axiosInstance } from ".";
import {
  GetUserResponse,
  MessageResponse,
  PostCheckUserNameRequest,
  PostSignInRequest,
  PostSignInResponse,
  PostSignUpRequest,
  PostSignUpResponse,
} from "@blog/types";

const USER_URI = "/user";

export const getUser = async (): Promise<GetUserResponse> => {
  const uri = `${USER_URI}`;
  const res = await axiosInstance.get(uri);

  return res.data;
};

export const postSignIn = async (
  params: PostSignInRequest
): Promise<PostSignInResponse> => {
  const uri = `${USER_URI}/signin`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};

export const postCheckUserName = async (
  params: PostCheckUserNameRequest
): Promise<MessageResponse> => {
  const uri = `${USER_URI}/check/userName`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};

export const postSignUp = async (
  params: PostSignUpRequest
): Promise<PostSignUpResponse> => {
  const uri = `${USER_URI}/signup`;
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) {
    if (key === "thumbnail" && value) {
      formData.append(key, value);
    } else {
      formData.append(key, value);
    }
  }

  const res = await axiosInstance.post(uri, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};
