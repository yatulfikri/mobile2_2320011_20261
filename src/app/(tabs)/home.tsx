import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Alert, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Beranda - Home Dashboard
 * - Header dengan title dan settings button
 * - Badge "Berhasil Masuk (UI Mode)"
 * - Greeting "Halo, Selamat Datang!" dengan email
 * - 5 menu: Produk, Pelanggan, Supplier, Barang Masuk, Barang Keluar
 */
export default function Home() {
  const params = useLocalSearchParams<{ email: string; name?: string }>();
  const email = params.email || 'hhag@gmail.com';
  const insets = useSafeAreaInsets();

  // Data 5 menu
  const menuItems = [
    {
      id: '1',
      icon: 'cube' as const,
      title: 'Produk',
      color: '#2563EB',
      bgColor: '#EFF6FF',
      action: () => router.push('/(tabs)/produk' as any),
    },
    {
      id: '2',
      icon: 'people' as const,
      title: 'Pelanggan',
      color: '#059669',
      bgColor: '#ECFDF5',
      action: () => Alert.alert('Info', 'Fitur Pelanggan siap dikembangkan'),
    },
    {
      id: '3',
      icon: 'business' as const,
      title: 'Supplier',
      color: '#D97706',
      bgColor: '#FFFBEB',
      action: () => Alert.alert('Info', 'Fitur Supplier siap dikembangkan'),
    },
    {
      id: '4',
      icon: 'arrow-down-circle' as const,
      title: 'Barang Masuk',
      color: '#0D9488',
      bgColor: '#F0FDFA',
      action: () => Alert.alert('Info', 'Fitur Barang Masuk siap dikembangkan'),
    },
    {
      id: '5',
      icon: 'arrow-up-circle' as const,
      title: 'Barang Keluar',
      color: '#E11D48',
      bgColor: '#FFF1F2',
      action: () => Alert.alert('Info', 'Fitur Barang Keluar siap dikembangkan'),
    },
  ];

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Beranda</Text>
        <TouchableOpacity style={styles.settingsButton} activeOpacity={0.7}>
          <Ionicons name="settings-sharp" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          {/* Badge - Berhasil Masuk */}
          <View style={styles.successBadge}>
            <Ionicons name="checkmark-circle" size={16} color="#059669" />
            <Text style={styles.successBadgeText}>Berhasil Masuk (UI Mode)</Text>
          </View>

          {/* Greeting */}
          <Text style={styles.greetingTitle}>Halo, Selamat Datang!</Text>
          <Text style={styles.greetingEmail}>{email}</Text>
        </View>

        {/* Menu Card */}
        <View style={styles.menuCard}>
          {/* Menu Header */}
          <View style={styles.menuHeader}>
            <Text style={styles.menuSectionTitle}>Layanan & Menu Utama</Text>
            <Text style={styles.menuSectionSubtitle}>
              Pintasan cepat pengelolaan operasional minimarket
            </Text>
          </View>

          {/* Menu Grid - 5 items dalam 2 baris */}
          <View style={styles.menuGrid}>
            {menuItems.map((item) => (
              <TouchableOpacity
                key={item.id}
                style={styles.menuItem}
                onPress={item.action}
                activeOpacity={0.7}
              >
                <View style={[styles.menuIconWrapper, { backgroundColor: item.bgColor }]}>
                  <Ionicons name={item.icon} size={32} color={item.color} />
                </View>
                <Text style={styles.menuLabel}>{item.title}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#F8FAFC',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },
  settingsButton: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#2563EB',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
    paddingTop: 8,
  },
  welcomeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
    marginBottom: 16,
  },
  successBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 14,
  },
  successBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#059669',
  },
  greetingTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  greetingEmail: {
    fontSize: 14,
    color: '#2563EB',
    fontWeight: '500',
  },
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },
  menuHeader: {
    marginBottom: 20,
  },
  menuSectionTitle: {
    fontSize: 16,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 4,
  },
  menuSectionSubtitle: {
    fontSize: 12.5,
    color: '#64748B',
    lineHeight: 18,
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 20,
  },
  menuItem: {
    width: '31%',
    alignItems: 'center',
  },
  menuIconWrapper: {
    width: 64,
    height: 64,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  menuLabel: {
    fontSize: 11,
    fontWeight: '700',
    color: '#1E293B',
    textAlign: 'center',
  },
});
