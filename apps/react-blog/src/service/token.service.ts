import { JwtTokens } from "@blog/types";

export const setToken = (tokens: JwtTokens) => {
  localStorage.setItem("accessToken", tokens.accessToken);
  localStorage.setItem("refreshToken", tokens.refreshToken);
};

export const getToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");

  if (accessToken && refreshToken) {
    const tokens: JwtTokens = {
      accessToken: accessToken,
      refreshToken: refreshToken,
    };
    return tokens;
  }

  return undefined;
};

export const clearToken = () => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
};
