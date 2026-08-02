import React, { useEffect } from "react";
import { StyleSheet, Text, View, Platform } from "react-native";
import { useRouter } from "expo-router";
import Logo from "../components/Logo";
import { useAuthStore } from "@/store/useAuthStore";

export default function Index() {
  const router = useRouter();
  const initialize = useAuthStore((state) => state.initialize);

  useEffect(() => {
    const checkSession = async () => {
      const delay = new Promise((resolve) => setTimeout(resolve, 1500));
      await initialize();
      await delay;
      
      const state = useAuthStore.getState();
      if (state.isAuthenticated) {
        router.replace("/app/profile");
      } else {
        router.replace("/auth/login");
      }
    };

    checkSession();
  }, [initialize, router]);

  return (
    <View style={styles.container}>
      {/* Moroccan Geometric Star Logo */}
      <View style={styles.logoContainer}>
        <Logo size="large" />
      </View>

      <Text style={styles.appName}>Marhba</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF8F3", // Cream Background
    alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    width: 90,
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },
  appName: {
    fontSize: 28,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontWeight: "700",
    color: "#2A2825", // Text primary
    letterSpacing: 0.5,
  },
});