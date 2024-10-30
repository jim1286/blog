import {
  CreateCommentReplyRequest,
  CreateCommentRequest,
  GetCommentListRequest,
  GetCommentListResponse,
  MessageResponse,
} from "@blog/types";
import { axiosInstance } from ".";

const COMMENT_URI = "/comment";

export const createComment = async (
  params: CreateCommentRequest
): Promise<MessageResponse> => {
  const uri = `${COMMENT_URI}/create`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};

export const createCommentReply = async (
  params: CreateCommentReplyRequest
): Promise<MessageResponse> => {
  const uri = `${COMMENT_URI}/create/reply`;
  const res = await axiosInstance.post(uri, params);

  return res.data;
};

export const getCommentList = async (
  params: GetCommentListRequest
): Promise<GetCommentListResponse> => {
  const uri = `${COMMENT_URI}/list`;
  const res = await axiosInstance.get(uri, { params });

  return res.data;
};
