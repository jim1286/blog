import { QUERY_KEYS } from "@/constants";
import { CommentService, PostService } from "@/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useGetUserQuery } from "./useUserQuery";

export const useGetPostQuery = (postId?: string) => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST, postId],
    enabled: !!postId,
    queryFn: () => PostService.getPost({ postId: postId! }),
  });
};

export const useGetPostListQuery = () => {
  const getUser = useGetUserQuery();

  return useQuery({
    queryKey: [QUERY_KEYS.POST_LIST, getUser.data?.id],
    enabled: !!getUser.data,
    queryFn: PostService.getPostList,
  });
};

export const useGetPostListAllQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST_LIST_ALL],
    queryFn: PostService.getPostListAll,
  });
};

export const useCreatePostMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostService.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_LIST_ALL] });
    },
  });
};
