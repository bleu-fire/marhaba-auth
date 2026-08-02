import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const API = axios.create({
  baseURL: "http://192.168.20.246:3000",
});

API.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = await AsyncStorage.getItem("refresh_token");
        if (refreshToken) {
          // Use axios directly to avoid using the interceptor on the refresh call
          const res = await axios.post("http://192.168.20.246:3000/api/auth/refresh", {
            refreshToken,
          });
          if (res.status === 200) {
            const { accessToken, refreshToken: newRefreshToken } = res.data;
            await AsyncStorage.setItem("auth_token", accessToken);
            await AsyncStorage.setItem("refresh_token", newRefreshToken);
            originalRequest.headers.Authorization = `Bearer ${accessToken}`;
            return API(originalRequest);
          }
        }
      } catch (refreshError) {
        console.error("Token refresh failed:", refreshError);
        await AsyncStorage.removeItem("auth_token");
        await AsyncStorage.removeItem("refresh_token");
      }
    }
    return Promise.reject(error);
  }
);
