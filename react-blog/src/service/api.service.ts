import axios from "axios";
import { TokenService } from ".";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL + ":" + import.meta.env.VITE_BASE_PORT,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const tokens = TokenService.getToken();

    if (tokens?.accessToken) {
      config.headers["Authorization"] = `Bearer ${tokens?.accessToken}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("API error:", error);
    return Promise.reject(error.response);
  }
);

export default axiosInstance;
