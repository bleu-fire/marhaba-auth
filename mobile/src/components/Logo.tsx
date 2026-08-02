import React from "react";
import { StyleSheet, View, Text } from "react-native";

type LogoProps = {
  size?: "small" | "large";
};

export default function Logo({ size = "small" }: LogoProps) {
  const isLarge = size === "large";
  const fontSize = isLarge ? 80 : 40;

  return (
    <View style={styles.logoContainer}>
      <Text style={[styles.starText, { fontSize }]}>✦</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  starText: {
    color: "#C9A961", // Gold branding color
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
