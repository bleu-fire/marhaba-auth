import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function ExploreScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header with back navigation */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <Feather name="arrow-left" size={24} color="#1A1A1A" />
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        {/* Hello Banner */}
        <View style={styles.banner}>
          <Text style={styles.bannerTitle}>Explore Marhba ✨</Text>
          <Text style={styles.bannerSubtitle}>Discover security sanctuary features</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F1ED', // Warm Beige Background
  },
  header: {
    height: 50,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  backButton: {
    padding: 4,
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  banner: {
    backgroundColor: '#FFF5F2', // Light Peach Card
    padding: 24,
    borderRadius: 12,
    alignItems: 'center',
    width: '100%',
    shadowColor: '#1A1A1A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 2,
  },
  bannerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1C1B1B',
    marginBottom: 6,
  },
  bannerSubtitle: {
    fontSize: 14,
    color: '#7F7668',
    textAlign: 'center',
  },
});
