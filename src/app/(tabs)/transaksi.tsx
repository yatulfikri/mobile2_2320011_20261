import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Transaksi
 * - Header dengan title dan settings button
 * - Badge "Kasir & Keranjang"
 * - Title "Transaksi Berjalan" dengan subtitle
 * - List transaksi dengan kode, items, waktu, dan harga
 */
export default function Transaksi() {
  const insets = useSafeAreaInsets();

  // Data transaksi sample
  const transactions = [
    { id: '1', code: 'TRX-001', items: '3 Item Belanja', time: '10:15 WIB', price: 'Rp 128.000' },
    { id: '2', code: 'TRX-002', items: '5 Item Belanja', time: '11:02 WIB', price: 'Rp 214.500' },
  ];

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Transaksi</Text>
        <TouchableOpacity style={styles.settingsButton} activeOpacity={0.7}>
          <Ionicons name="settings-sharp" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Info Card */}
        <View style={styles.infoCard}>
          {/* Badge */}
          <View style={styles.infoBadge}>
            <Ionicons name="cart" size={16} color="#059669" />
            <Text style={styles.infoBadgeText}>Kasir & Keranjang</Text>
          </View>

          {/* Title */}
          <Text style={styles.infoTitle}>Transaksi Berjalan</Text>
          <Text style={styles.infoSubtitle}>
            Ringkasan keranjang belanja dan riwayat transaksi kasir hari ini.
          </Text>
        </View>

        {/* Transaction List */}
        <View style={styles.listContainer}>
          {transactions.map((item) => (
            <TouchableOpacity key={item.id} style={styles.transactionCard} activeOpacity={0.7}>
              {/* Left: Icon + Info */}
              <View style={styles.transactionLeft}>
                <View style={styles.transactionIcon}>
                  <Ionicons name="cart-outline" size={24} color="#059669" />
                </View>
                <View style={styles.transactionInfo}>
                  <Text style={styles.transactionCode}>{item.code}</Text>
                  <Text style={styles.transactionDetails}>
                    {item.items} • {item.time}
                  </Text>
                </View>
              </View>

              {/* Right: Price */}
              <Text style={styles.transactionPrice}>{item.price}</Text>
            </TouchableOpacity>
          ))}
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
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
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
  },
  infoCard: {
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
  infoBadge: {
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
  infoBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#059669',
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
    marginBottom: 6,
  },
  infoSubtitle: {
    fontSize: 13,
    color: '#64748B',
    lineHeight: 19,
  },
  listContainer: {
    gap: 12,
  },
  transactionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    padding: 14,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 1,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  transactionIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#ECFDF5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  transactionInfo: {
    flex: 1,
  },
  transactionCode: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  transactionDetails: {
    fontSize: 12,
    color: '#64748B',
  },
  transactionPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#059669',
  },
});
