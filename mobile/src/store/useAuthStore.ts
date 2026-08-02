import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API } from "@/services/api";
import { login as loginService } from "@/services/login";
import { register as registerService } from "@/services/register";

type User = {
  id: string;
  fullname: string;
  email: string;
};

type AuthState = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  isAuthenticated: boolean;
  initialize: () => Promise<void>;
  login: (credentials: Parameters<typeof loginService>[0]) => Promise<void>;
  register: (data: Parameters<typeof registerService>[0]) => Promise<void>;
  logout: () => Promise<void>;
  clearError: () => void;
};

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  isLoading: false,
  error: null,
  isAuthenticated: false,

  initialize: async () => {
    set({ isLoading: true, error: null });
    try {
      const token = await AsyncStorage.getItem("auth_token");
      if (token) {
        const response = await API.get("/api/auth/me");
        set({ user: response.data, isAuthenticated: true });
      } else {
        set({ user: null, isAuthenticated: false });
      }
    } catch (err: any) {
      console.error("Auth initialization failed", err);
      await AsyncStorage.removeItem("auth_token");
      await AsyncStorage.removeItem("refresh_token");
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },

  login: async (credentials) => {
    set({ isLoading: true, error: null });
    try {
      const response = await loginService(credentials);
      if (response && response.accessToken) {
        await AsyncStorage.setItem("auth_token", response.accessToken);
        if (response.refreshToken) {
          await AsyncStorage.setItem("refresh_token", response.refreshToken);
        }
        
        // Fetch profile
        const profileResponse = await API.get("/api/auth/me");
        set({ user: profileResponse.data, isAuthenticated: true });
      } else {
        throw new Error("Authentication failed. Please try again.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Invalid email or password";
      set({ error: errMsg });
      throw new Error(errMsg);
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await registerService(data);
      if (response && response.accessToken) {
        await AsyncStorage.setItem("auth_token", response.accessToken);
        if (response.refreshToken) {
          await AsyncStorage.setItem("refresh_token", response.refreshToken);
        }

        // Fetch profile
        const profileResponse = await API.get("/api/auth/me");
        set({ user: profileResponse.data, isAuthenticated: true });
      } else {
        throw new Error("Registration succeeded, but failed to log in automatically.");
      }
    } catch (err: any) {
      const errMsg = err.response?.data?.message || err.message || "Failed to create account.";
      set({ error: errMsg });
      throw new Error(errMsg);
    } finally {
      set({ isLoading: false });
    }
  },

  logout: async () => {
    set({ isLoading: true });
    try {
      await AsyncStorage.removeItem("auth_token");
      await AsyncStorage.removeItem("refresh_token");
      set({ user: null, isAuthenticated: false });
    } catch (err) {
      console.error("Logout failed", err);
    } finally {
      set({ isLoading: false });
    }
  },

  clearError: () => set({ error: null }),
}));
