import { QUERY_KEYS } from "@/constants";
import { UserService } from "@/service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUserQuery = () => {
  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    gcTime: Infinity,
    staleTime: Infinity,
    queryFn: UserService.getUser,
  });
};

export const usePostSignInMutation = () => {
  return useMutation({
    mutationFn: UserService.postSignIn,
  });
};

export const useCreateUserMutation = () => {
  return useMutation({
    mutationFn: UserService.createUser,
  });
};
