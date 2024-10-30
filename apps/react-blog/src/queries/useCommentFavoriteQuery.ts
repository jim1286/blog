import { QUERY_KEYS } from "@/constants";
import { CommentFavoriteService } from "@/service";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateCommentFavoriteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: CommentFavoriteService.updateCommentFavorite,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.COMMENT_LIST] });
    },
  });
};
