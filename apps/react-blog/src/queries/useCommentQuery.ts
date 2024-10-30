import { QUERY_KEYS } from "@/constants";
import { CommentService } from "@/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export const useCreateCommentMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CommentService.createComment,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT_LIST] });
    },
  });
};

export const useCreateCommentReplyMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CommentService.createCommentReply,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT_LIST] });
    },
  });
};

export const useGetCommentListQuery = (postId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.COMMENT_LIST, postId],
    enabled: !!postId,
    queryFn: () => CommentService.getCommentList({ postId: postId! }),
  });
};
