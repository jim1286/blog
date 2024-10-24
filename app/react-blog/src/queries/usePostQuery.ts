import { PostService } from "@/service";
import { useQuery } from "@tanstack/react-query";

export const useGetPostListAllQuery = () => {
  return useQuery({
    queryKey: ["getPostListAll"],
    queryFn: PostService.getPostListAll,
  });
};
