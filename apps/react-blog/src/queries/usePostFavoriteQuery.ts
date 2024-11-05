import { QUERY_KEYS } from "@/constants";
import { PostFavoriteService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdatePostFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: PostFavoriteService.updatePostFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_LIST] });
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.POST_LIST_ALL] });
    },
  });
};
