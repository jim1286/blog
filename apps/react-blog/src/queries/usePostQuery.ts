import { QUERY_KEYS } from "@/constants";
import { PostService } from "@/service";
import { useQuery } from "@tanstack/react-query";

export const useGetPostListAllQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.POST_LIST_ALL],
    queryFn: PostService.getPostListAll,
  });
};
