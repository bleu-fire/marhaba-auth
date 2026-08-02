import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/useAuthStore";
import { ArrowLeft } from "lucide-react-native";
import InputField from "../../components/InputField";
import CustomButton from "../../components/CustomButton";

export default function Register() {
  const router = useRouter();
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  
  // Validation / Error States
  const [fullnameError, setFullnameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  
  const register = useAuthStore((state) => state.register);
  const isLoading = useAuthStore((state) => state.isLoading);
  const generalError = useAuthStore((state) => state.error);
  const clearError = useAuthStore((state) => state.clearError);

  const validate = () => {
    let isValid = true;
    setFullnameError("");
    setEmailError("");
    setPasswordError("");
    setConfirmPasswordError("");
    clearError();

    if (!fullname.trim()) {
      setFullnameError("Full name is required");
      isValid = false;
    }

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
    } else if (password.length < 8) {
      setPasswordError("Password must be at least 8 characters");
      isValid = false;
    }

    if (!confirmPassword) {
      setConfirmPasswordError("Please confirm your password");
      isValid = false;
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("Passwords do not match");
      isValid = false;
    }

    return isValid;
  };

  const handleRegister = async () => {
    if (!validate()) return;
    try {
      await register({
        fullname: fullname.trim(),
        email: email.trim(),
        password,
      });
      router.replace("/app/profile");
    } catch (err: any) {
      console.log("Registration failed");
    }
  };

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
          {/* Back Arrow button */}
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <ArrowLeft size={20} color="#2A2825" />
          </TouchableOpacity>

          <View style={styles.headerContainer}>
            <Text style={styles.title}>Welcome to Marhba</Text>
            <Text style={styles.subtitle}>Create your account and get started</Text>
          </View>

          {generalError ? (
            <View style={styles.errorBanner}>
              <Text style={styles.errorBannerText}>{generalError}</Text>
            </View>
          ) : null}

          <View style={styles.form}>
            {/* Full Name Field */}
            <InputField
              label="Full Name"
              value={fullname}
              onChangeText={(text) => {
                setFullname(text);
                if (fullnameError) setFullnameError("");
              }}
              placeholder="Oussama"
              error={fullnameError}
            />

            {/* Email Field */}
            <InputField
              label="Email"
              value={email}
              onChangeText={(text) => {
                setEmail(text);
                if (emailError) setEmailError("");
              }}
              placeholder="example@marhba.com"
              keyboardType="email-address"
              error={emailError}
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
              helperText="Must be at least 8 characters"
            />

            {/* Confirm Password Field */}
            <InputField
              label="Confirm Password"
              value={confirmPassword}
              onChangeText={(text) => {
                setConfirmPassword(text);
                if (confirmPasswordError) setConfirmPasswordError("");
              }}
              placeholder="••••••••"
              secureTextEntry
              error={confirmPasswordError}
            />

            {/* Create Account Button */}
            <CustomButton
              title="Create Account"
              isLoading={isLoading}
              onPress={handleRegister}
            />
          </View>

          {/* Links */}
          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={() => router.push("/auth/login")}>
              <Text style={styles.linkText}>Sign in</Text>
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
  backButton: {
    alignSelf: "flex-start",
    marginTop: 8,
    marginBottom: 16,
    padding: 4,
    marginLeft: -4,
  },
  headerContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: Platform.OS === "ios" ? "Georgia" : "serif",
    fontWeight: "700",
    color: "#2A2825", // Text primary
  },
  subtitle: {
    fontSize: 12,
    color: "#7A7570", // Text Muted
    marginTop: 4,
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
    fontWeight: "500",
  },
  form: {
    width: "100%",
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
