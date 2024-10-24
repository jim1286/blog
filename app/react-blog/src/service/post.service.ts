import { ApiResponse, GetPostListAllResponse } from "@/http";
import { axiosInstance } from ".";

const POST_URI = "/post";

export const getPostListAll = async (): Promise<GetPostListAllResponse> => {
  const uri = `${POST_URI}/list/all`;
  const res: ApiResponse = await axiosInstance.get(uri);

  return res.data;
};
