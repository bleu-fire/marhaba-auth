import React from "react";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

type CustomButtonProps = {
  title: string;
  isLoading?: boolean;
  onPress: () => void;
  disabled?: boolean;
  style?: TouchableOpacityProps["style"];
};

export default function CustomButton({
  title,
  isLoading = false,
  onPress,
  disabled = false,
  style,
}: CustomButtonProps) {
  const isButtonDisabled = disabled || isLoading;

  return (
    <TouchableOpacity
      style={[styles.button, isButtonDisabled && styles.buttonDisabled, style]}
      onPress={onPress}
      disabled={isButtonDisabled}
      activeOpacity={0.9}
    >
      {isLoading ? (
        <ActivityIndicator color="#FFFFFF" size="small" />
      ) : (
        <Text style={styles.buttonText}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 40,
    backgroundColor: "#F07856",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
    marginTop: 10,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
    width: "100%",
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
  },
});
