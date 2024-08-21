import { UserService } from "@/service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: ["getUser"],
    gcTime: Infinity,
    staleTime: Infinity,
    queryFn: UserService.getUser,
  });
};

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: UserService.createUser,
  });
};