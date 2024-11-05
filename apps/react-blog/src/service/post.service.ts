import {
  CreatePostRequest,
  DeletePostRequest,
  GetPostListAllResponse,
  GetPostListResponse,
  GetPostRequest,
  GetPostResponse,
  MessageResponse,
} from "@blog/types";
import { axiosInstance } from ".";

const POST_URI = "/post";

export const getPost = async (
  params: GetPostRequest
): Promise<GetPostResponse> => {
  const uri = `${POST_URI}`;
  const res = await axiosInstance.get(uri, { params });

  return res.data;
};

export const deletePost = async (
  params: DeletePostRequest
): Promise<GetPostResponse> => {
  const uri = `${POST_URI}`;
  const res = await axiosInstance.delete(uri, { params });

  return res.data;
};

export const getPostList = async (): Promise<GetPostListResponse> => {
  const uri = `${POST_URI}/list`;
  const res = await axiosInstance.get(uri);

  return res.data;
};

export const getPostListAll = async (): Promise<GetPostListAllResponse> => {
  const uri = `${POST_URI}/list/all`;
  const res = await axiosInstance.get(uri);

  return res.data;
};

export const createPost = async (
  params: CreatePostRequest
): Promise<MessageResponse> => {
  const uri = `${POST_URI}/create`;
  const formData = new FormData();

  for (const [key, value] of Object.entries(params)) {
    if (key === "thumbnail" && value) {
      formData.append(key, value);
    } else if (Array.isArray(value)) {
      value.forEach((item) => formData.append(key, item)); // 배열인 경우 각 요소 추가
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
