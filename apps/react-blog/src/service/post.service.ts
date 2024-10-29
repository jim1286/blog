import { GetPostListAllResponse, GetPostListResponse } from "@blog/types";
import { axiosInstance } from ".";

const POST_URI = "/post";

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
