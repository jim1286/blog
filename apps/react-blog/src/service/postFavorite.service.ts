import { MessageResponse, UpdatePostFavoriteRequest } from "@blog/types";
import { axiosInstance } from ".";

const POST_FAVORITE_URI = "/post-favorite";

export const updatePostFavorite = async (
  params: UpdatePostFavoriteRequest
): Promise<MessageResponse> => {
  const uri = `${POST_FAVORITE_URI}`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};
