import React, { useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
  Platform,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowLeft, Home } from "lucide-react-native";
import CustomButton from "../../components/CustomButton";

export default function Profile() {
  const router = useRouter();
  const user = useAuthStore((state) => state.user);
  const isLoading = useAuthStore((state) => state.isLoading);
  const logout = useAuthStore((state) => state.logout);

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/auth/login");
    }
  }, [user, isLoading, router]);

  const handleLogout = async () => {
    try {
      await logout();
      router.replace("/auth/login");
    } catch (err) {
      console.error("Logout failed", err);
    }
  };

  if (isLoading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#F07856" />
        <Text style={styles.loadingText}>Loading account...</Text>
      </View>
    );
  }

  const userDisplayName = user?.fullname || "Oussama";

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF8F3" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={handleLogout}
          activeOpacity={0.7}
        >
          <ArrowLeft size={20} color="#2A2825" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Marhba</Text>
        <View style={styles.headerRightSpacer} />
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        {/* Greetings Section */}
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Marhba, {userDisplayName}👋</Text>
          <Text style={styles.subtitle}>Welcome back. You're successfully authenticated.</Text>
        </View>

        {/* Minimalist Details Card */}
        <View style={styles.infoCard}>
          <Text style={styles.infoCardHeader}>Account Details</Text>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Name</Text>
            <Text style={styles.infoValue}>{userDisplayName}</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoValue}>{user?.email || "oussama@email.com"}</Text>
          </View>
          
          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Security Session</Text>
            <Text style={styles.infoValue}>JWT Verified</Text>
          </View>

          <CustomButton
            title="Sign Out"
            onPress={handleLogout}
            style={styles.signOutButton}
          />
        </View>
      </View>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomTabBar}>
        <TouchableOpacity style={styles.tabItem} activeOpacity={0.8}>
          <Home size={20} color="#FFFFFF" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF8F3", // Cream Background
  },
  loadingContainer: {
    flex: 1,
    backgroundColor: "#FAF8F3",
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    marginTop: 12,
    color: "#7A7570",
    fontSize: 14,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    height: 50,
    backgroundColor: "#FAF8F3",
    borderBottomWidth: 1,
    borderBottomColor: "#E8E4DD", // Dark Beige Border
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontWeight: "700",
    color: "#C9A961", // Gold branding accent
    textAlign: "center",
  },
  headerRightSpacer: {
    width: 28, // Matches back button width to keep title centered
  },
  content: {
    flex: 1,
    padding: 24,
  },
  greetingSection: {
    marginTop: 8,
    marginBottom: 28,
  },
  greeting: {
    fontSize: 22,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontWeight: "700",
    color: "#2A2825", // Text Primary
  },
  subtitle: {
    fontSize: 12,
    color: "#7A7570", // Text Muted
    marginTop: 6,
  },
  infoCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4, // Subtle rounded corner
    borderWidth: 1,
    borderColor: "#E0DDD8", // Subtle borders
    padding: 16,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  infoCardHeader: {
    fontSize: 14,
    fontWeight: "600",
    color: "#2A2825",
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 8,
  },
  infoLabel: {
    fontSize: 12,
    color: "#7A7570",
  },
  infoValue: {
    fontSize: 12,
    color: "#2A2825",
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0DDD8",
    marginVertical: 4,
  },
  signOutButton: {
    marginTop: 20,
  },
  bottomTabBar: {
    height: 50,
    backgroundColor: "#F07856", // Coral background for footer tab
    justifyContent: "center",
    alignItems: "center",
  },
  tabItem: {
    padding: 8,
  },
});
