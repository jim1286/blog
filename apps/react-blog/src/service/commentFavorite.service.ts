import { MessageResponse, UpdateCommentFavoriteRequest } from "@blog/types";
import { axiosInstance } from ".";

const COMMENT_FAVORITE_URI = "/comment-favorite";

export const updateCommentFavorite = async (
  params: UpdateCommentFavoriteRequest
): Promise<MessageResponse> => {
  const uri = `${COMMENT_FAVORITE_URI}`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};
