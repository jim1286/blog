import { useGetUserQuery } from "@/queries";
import { TokenService } from "@/service";
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC = () => {
  const getUser = useGetUserQuery();
  const token = TokenService.getToken();

  if (getUser.isError || !token) {
    return <Navigate to="/login" replace />;
  }

  return !getUser.isLoading && <Outlet />;
};

export default PrivateRoute;
