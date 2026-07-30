import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState('oussama@email.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer} bounces={false}>
        
        {/* Courtyard Header Image */}
        <View style={styles.imageContainer}>
          <Image
            source={require('@/assets/images/courtyard.png')}
            style={styles.heroImage}
            resizeMode="cover"
          />
        </View>

        {/* Title */}
        <View style={styles.titleSection}>
          <Text style={styles.title}>Welcome back</Text>
          <Text style={styles.subtitle}>Sign in to continue to your account</Text>
        </View>

        {/* Form */}
        <View style={styles.form}>
          {/* Email */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Email Address</Text>
            <View style={styles.inputWrapper}>
              <TextInput
                style={styles.input}
                placeholder="Enter your email"
                placeholderTextColor="#999999"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Feather name="mail" size={20} color="#7F7668" style={styles.inputIcon} />
            </View>
          </View>

          {/* Password */}
          <View style={styles.inputGroup}>
            <View style={styles.passwordHeader}>
              <Text style={styles.label}>Password</Text>
              <TouchableOpacity>
                <Text style={styles.forgotText}>Forgot?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.inputWrapper}>
              <TextInput
                style={[styles.input, { paddingRight: 50 }]}
                placeholder="Enter password"
                placeholderTextColor="#999999"
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
                autoCapitalize="none"
              />
              <TouchableOpacity
                onPress={() => setShowPassword(!showPassword)}
                style={styles.eyeIcon}
              >
                <Feather name={showPassword ? 'eye-off' : 'eye'} size={20} color="#7F7668" />
              </TouchableOpacity>
            </View>
          </View>

          {/* Remember Me */}
          <TouchableOpacity
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.checkboxRow}
          >
            <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
              {rememberMe && <Feather name="check" size={12} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxLabel}>Remember this device</Text>
          </TouchableOpacity>

          {/* Sign In Button */}
          <TouchableOpacity onPress={() => router.push('/home')} style={styles.button}>
            <Text style={styles.buttonText}>Sign In</Text>
            <Feather name="arrow-right" size={18} color="#FFFFFF" />
          </TouchableOpacity>
        </View>


        {/* Register link footer */}
        <View style={styles.footer}>
          <Text style={styles.footerText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => router.push('/register')}>
            <Text style={styles.linkText}>Create account</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1ED', // Warm Beige Background
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageContainer: {
    width: '100%',
    height: 150,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 20,
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  titleSection: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1A1A1A',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#7F7668',
  },
  form: {
    gap: 16,
  },
  inputGroup: {
    gap: 6,
  },
  passwordHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4D463A',
  },
  forgotText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#9B4426',
  },
  inputWrapper: {
    justifyContent: 'center',
  },
  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#EEEEEE',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#1A1A1A',
  },
  inputIcon: {
    position: 'absolute',
    right: 16,
  },
  eyeIcon: {
    position: 'absolute',
    right: 16,
    padding: 4,
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginTop: 4,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderWidth: 1,
    borderColor: '#D0C5B5',
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#9B4426',
    borderColor: '#9B4426',
  },
  checkboxLabel: {
    fontSize: 12,
    color: '#4D463A',
  },
  button: {
    height: 48,
    backgroundColor: '#E07856', // Terracotta Red
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 16,
  },
  footerText: {
    fontSize: 14,
    color: '#7F7668',
  },
  linkText: {
    fontSize: 14,
    fontWeight: '700',
    color: '#E07856',
  },
});
