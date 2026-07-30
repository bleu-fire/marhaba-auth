import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => router.replace('/login')} style={styles.backButton}>
            <Feather name="log-out" size={20} color="#7F7668" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Marhba</Text>
        </View>
        <View style={styles.avatarContainer}>
          <Image
            source={{ uri: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop' }}
            style={styles.avatar}
          />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Greetings */}
        <View style={styles.greetingSection}>
          <Text style={styles.greeting}>Marhba, Oussama 👋</Text>
          <Text style={styles.subtitle}>Welcome back. You're successfully authenticated.</Text>
        </View>

        {/* Security Card */}
        <View style={styles.securityCard}>
          <View style={styles.securityHeader}>
            <View style={styles.securityIconContainer}>
              <Feather name="shield" size={24} color="#E07856" />
            </View>
            <View>
              <Text style={styles.securityTitle}>Account secured</Text>
              <Text style={styles.securityStatus}>Your session is active</Text>
            </View>
          </View>
          <View style={styles.statusBadge}>
            <Feather name="check-circle" size={14} color="#4CAF50" />
            <Text style={styles.statusText}>Verified Identity</Text>
          </View>
        </View>



      </ScrollView>

      {/* Bottom Nav */}
      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="home" size={22} color="#E07856" />
          <Text style={[styles.navText, { color: '#E07856', fontWeight: '700' }]}>Home</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FCF9F8',
  },
  header: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F1ED',
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  backButton: {
    padding: 4,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#755A24',
  },
  avatarContainer: {
    width: 36,
    height: 36,
    borderRadius: 18,
    overflow: 'hidden',
    borderWidth: 2,
    borderColor: '#C9A86A',
  },
  avatar: {
    width: '100%',
    height: '100%',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 90,
  },
  greetingSection: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1C1B1B',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#7F7668',
  },
  securityCard: {
    backgroundColor: '#FFF5F2',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  securityHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 12,
  },
  securityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#E0785615',
    justifyContent: 'center',
    alignItems: 'center',
  },
  securityTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#1C1B1B',
  },
  securityStatus: {
    fontSize: 12,
    color: '#7F7668',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    alignSelf: 'flex-start',
    backgroundColor: '#4CAF5015',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 6,
  },
  statusText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#4CAF50',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#1C1B1B',
    marginBottom: 12,
  },
  bottomNav: {
    height: 60,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#EEEEEE',
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    fontSize: 10,
    color: '#7F7668',
    marginTop: 2,
  },
});
