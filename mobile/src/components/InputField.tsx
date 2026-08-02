import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  TextInputProps,
} from "react-native";
import { AtSign, Eye, EyeOff } from "lucide-react-native";

type InputFieldProps = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: TextInputProps["keyboardType"];
  autoCapitalize?: TextInputProps["autoCapitalize"];
  helperText?: string;
  rightElement?: React.ReactNode;
  showMailIcon?: boolean;
};

export default function InputField({
  label,
  value,
  onChangeText,
  placeholder,
  error,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  helperText,
  rightElement,
  showMailIcon = false,
}: InputFieldProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const shouldSecure = secureTextEntry && !showPassword;

  return (
    <View style={styles.inputGroup}>
      <View style={styles.labelRow}>
        <Text style={styles.label}>{label}</Text>
        {rightElement}
      </View>

      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
          error ? styles.inputError : null,
        ]}
      >
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          placeholderTextColor="#7A7570"
          secureTextEntry={shouldSecure}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          value={value}
          onChangeText={onChangeText}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {showMailIcon && !secureTextEntry && (
          <View style={styles.iconContainer}>
            <AtSign size={15} color="#7A7570" />
          </View>
        )}
        {secureTextEntry && (
          <TouchableOpacity
            style={styles.iconButton}
            onPress={() => setShowPassword(!showPassword)}
            activeOpacity={0.7}
          >
            {showPassword ? (
              <EyeOff size={15} color="#7A7570" />
            ) : (
              <Eye size={15} color="#7A7570" />
            )}
          </TouchableOpacity>
        )}
      </View>

      {helperText && !error ? <Text style={styles.helperText}>{helperText}</Text> : null}
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputGroup: {
    marginBottom: 14,
  },
  labelRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  label: {
    fontSize: 12,
    color: "#7A7570",
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#E0DDD8",
    borderRadius: 4,
    height: 38,
  },
  textInput: {
    flex: 1,
    height: "100%",
    paddingHorizontal: 12,
    fontSize: 14,
    color: "#2A2825",
  },
  inputFocused: {
    borderColor: "#F07856",
  },
  inputError: {
    borderColor: "#D97757",
  },
  iconButton: {
    paddingHorizontal: 12,
    justifyContent: "center",
    height: "100%",
  },
  iconContainer: {
    paddingHorizontal: 12,
    justifyContent: "center",
    height: "100%",
  },
  helperText: {
    color: "#7A7570",
    fontSize: 10,
    marginTop: 4,
  },
  errorText: {
    color: "#D97757",
    fontSize: 11,
    marginTop: 4,
  },
});
