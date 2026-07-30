import React, { useEffect, useRef } from 'react';
import { StyleSheet, Text, View, Animated, Easing } from 'react-native';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

export default function SplashScreen() {
  const router = useRouter();

  // Animations for the 3 dots
  const dot1 = useRef(new Animated.Value(0.4)).current;
  const dot2 = useRef(new Animated.Value(0.4)).current;
  const dot3 = useRef(new Animated.Value(0.4)).current;

  // Animation for overall fade in
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Fade in screen
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Pulse animation function
    const pulse = (dot: Animated.Value, delay: number) => {
      Animated.loop(
        Animated.sequence([
          Animated.delay(delay),
          Animated.timing(dot, {
            toValue: 1,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
          Animated.timing(dot, {
            toValue: 0.4,
            duration: 400,
            easing: Easing.inOut(Easing.ease),
            useNativeDriver: true,
          }),
        ])
      ).start();
    };

    pulse(dot1, 0);
    pulse(dot2, 200);
    pulse(dot3, 400);

    // Redirect to login screen after 2.5 seconds
    const timer = setTimeout(() => {
      router.replace('/login');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.content, { opacity: fadeAnim }]}>
        {/* Moroccan Geometric Star Logo */}
        <View style={styles.logoContainer}>
          <Svg width={80} height={80} viewBox="0 0 80 80" fill="none">
            <Path
              d="M40 0L49.1915 30.8085L80 40L49.1915 49.1915L40 80L30.8085 49.1915L0 40L30.8085 30.8085L40 0Z"
              fill="#C9A86A"
            />
          </Svg>
        </View>

        {/* App Branding */}
        <Text style={styles.title}>Marhba</Text>

        {/* Status Message */}
        <Text style={styles.statusText}>Checking your session...</Text>

        {/* 3-Dot Spinner */}
        <View style={styles.spinnerContainer}>
          <Animated.View style={[styles.dot, { opacity: dot1, transform: [{ scale: dot1 }] }]} />
          <Animated.View style={[styles.dot, { opacity: dot2, transform: [{ scale: dot2 }] }]} />
          <Animated.View style={[styles.dot, { opacity: dot3, transform: [{ scale: dot3 }] }]} />
        </View>
      </Animated.View>

      {/* Footer Attribution */}
      <SafeAreaView edges={['bottom']} style={styles.footer}>
        <Text style={styles.footerText}>SECURE SANCTUARY</Text>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1ED', // Warm Beige Background
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    marginBottom: 16,
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  title: {
    fontSize: 28,
    fontFamily: 'Plus Jakarta Sans',
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 8,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'Inter',
    fontWeight: '500',
    color: '#666666',
    marginBottom: 32,
  },
  spinnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#C9A86A',
  },
  footer: {
    position: 'absolute',
    bottom: 24,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#7F7668',
    opacity: 0.4,
    letterSpacing: 2.5,
  },
});
