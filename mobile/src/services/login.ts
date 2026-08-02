import { API } from "./api";

type LoginData = {
  email: string;
  password: string;
};

export const login = async (loginData: LoginData) => {
  try {
    const response = await API.post("/api/auth/login", loginData);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Failed to sign in");
    }
    throw new Error(error.message || "Network error");
  }
};
