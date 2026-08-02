import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
import Logo from "../../components/Logo";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  
  // Validation / Error States
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const login = useAuthStore((state) => state.login);
  const isLoading = useAuthStore((state) => state.isLoading);
  const generalError = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const validate = () => {
    let isValid = true;
    setEmailError("");
    setPasswordError("");
    clearError();

    if (!email) {
      setEmailError("Email address is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError("Please enter a valid email address");
      isValid = false;
    }

    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    } else if (password.length < 6) {
      setPasswordError("Password must be at least 6 characters");
      isValid = false;
    }

    return isValid;
  };

  const handleSignIn = async () => {
    if (!validate()) return;
    try {
      await login({ email: email.trim(), password });
      router.replace("/app/profile");
    } catch (err: any) {
      console.log("Login failed");
    }
  };

  const forgotLink = (
    <TouchableOpacity activeOpacity={0.7}>
      <Text style={styles.forgotText}>Forgot?</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#FAF8F3" />
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardView}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
        >
          {/* Top Banner Image Card */}
          <View style={styles.bannerContainer}>
            <Image
              source={require("../../../assets/images/marhba_banner.jpg")}
              style={styles.bannerImage}
              resizeMode="cover"
            />
            <View style={styles.bannerOverlay}>
              <Logo size="small" />
              <Text style={styles.bannerLogoText}>Marhba</Text>
              <Text style={styles.bannerLogoSubtitle}>Welcome back!</Text>
            </View>
          </View>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome back</Text>
            <Text style={styles.subtitle}>Sign in to continue to your account</Text>
          </View>

          {generalError ? (
            <View style={styles.errorBanner}>
              <Text style={styles.errorBannerText}>{generalError}</Text>
            </View>
          ) : null}

          <View style={styles.form}>
            {/* Email Field */}
            <InputField
              label="Email Address"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError("");
              }}
              placeholder="oussama@email.com"
              keyboardType="email-address"
              error={emailError}
              showMailIcon={true}
            />

            {/* Password Field */}
            <InputField
              label="Password"
              value={password}
              onChangeText={(text) => {
                setPassword(text);
                if (passwordError) setPasswordError("");
              }}
              placeholder="••••••••"
              secureTextEntry
              error={passwordError}
              rightElement={forgotLink}
            />

            {/* Remember Me Checkbox */}
            <TouchableOpacity
              style={styles.rememberContainer}
              onPress={() => setRememberMe(!rememberMe)}
              activeOpacity={0.8}
            >
              <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
                {rememberMe && <Text style={styles.checkmark}>✓</Text>}
              </View>
              <Text style={styles.rememberText}>Remember this device</Text>
            </TouchableOpacity>

            {/* Sign In Button */}
            <CustomButton
              title="Sign In →"
              isLoading={isLoading}
              onPress={handleSignIn}
            />
          </View>

          {/* Footer Links */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Don't have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/register")}>
              <Text style={styles.linkText}>Create account</Text>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#FAF8F3", // Cream Background
  },
  keyboardView: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingBottom: 32,
    paddingTop: 12,
  },
  bannerContainer: {
    width: "100%",
    height: 170,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20,
    position: "relative",
  },
  bannerImage: {
    width: "100%",
    height: "100%",
  },
  bannerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(42, 40, 37, 0.45)", // Semi-transparent dark overlay for text contrast
    justifyContent: "center",
    alignItems: "center",
  },
  bannerLogoText: {
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontSize: 24,
    color: "#C9A961", // Gold logo
    fontWeight: "700",
    marginTop: 6,
  },
  bannerLogoSubtitle: {
    fontSize: 12,
    color: "#FFFFFF",
    marginTop: 2,
    fontWeight: "500",
  },
  headerContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  title: {
    fontSize: 22,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontWeight: "700",
    color: "#2A2825", // Text primary
    textAlign: "center",
  },
  subtitle: {
    fontSize: 12,
    color: "#7A7570", // Text Muted
    marginTop: 4,
    textAlign: "center",
  },
  errorBanner: {
    backgroundColor: "#FFF5F2",
    borderWidth: 1,
    borderColor: "#D97757",
    borderRadius: 4,
    padding: 10,
    marginBottom: 16,
  },
  errorBannerText: {
    color: "#D97757",
    fontSize: 13,
    textAlign: "center",
    fontWeight: "500",
  },
  form: {
    width: "100%",
  },
  forgotText: {
    color: "#F07856", // Coral Accent
    fontSize: 12,
    fontWeight: "600",
  },
  rememberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
    marginTop: 2,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderWidth: 1,
    borderColor: "#E0DDD8",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 8,
  },
  checkboxChecked: {
    borderColor: "#F07856",
    backgroundColor: "#FFFFFF",
  },
  checkmark: {
    color: "#F07856",
    fontSize: 10,
    fontWeight: "bold",
    lineHeight: 12,
  },
  rememberText: {
    color: "#7A7570",
    fontSize: 12,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  footerText: {
    color: "#7A7570",
    fontSize: 13,
  },
  linkText: {
    color: "#F07856",
    fontSize: 13,
    fontWeight: "600",
  },
});
