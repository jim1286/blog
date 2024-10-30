import { QUERY_KEYS } from "@/constants";
import { TokenService, UserService } from "@/service";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

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
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: UserService.postSignIn,
    onSuccess: (res) => {
      TokenService.setToken(res);
      queryClient.invalidateQueries({ queryKey: [QUERY_KEYS.USER] });
    },
  });
};

export const usePostCheckUserNameMutation = () => {
  return useMutation({
    mutationFn: UserService.postCheckUserName,
  });
};

export const usePostSignUpMutation = () => {
  return useMutation({
    mutationFn: UserService.postSignUp,
  });
};
