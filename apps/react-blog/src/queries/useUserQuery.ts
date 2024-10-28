import { QUERY_KEYS } from "@/constants";
import { TokenService, UserService } from "@/service";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useGetUserQuery = () => {
  const token = TokenService.getToken();

  return useQuery({
    queryKey: [QUERY_KEYS.USER],
    gcTime: Infinity,
    staleTime: Infinity,
    enabled: !!token,
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
