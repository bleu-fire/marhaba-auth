import { API } from "./api";

type UserData = {
  fullname: string;
  email: string;
  password: string;
};

export const register = async (userData: UserData) => {
  try {
    const response = await API.post("/api/auth/register", userData);
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data) {
      throw new Error(error.response.data.message || "Failed to sign up");
    }
    throw new Error(error.message || "Network error");
  }
};
