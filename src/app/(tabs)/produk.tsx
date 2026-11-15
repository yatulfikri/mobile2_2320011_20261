import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Katalog Produk
 * - Header dengan title dan settings button
 * - Badge "Inventaris Barang"
 * - Title "Daftar Produk"
 * - List produk dengan icon, nama, stok, dan harga
 */
export default function Produk() {
  const insets = useSafeAreaInsets();

  // Data produk sample
  const products = [
    { id: '1', name: 'Minyak Goreng 2L', stock: '45 pcs', price: 'Rp 38.000' },
    { id: '2', name: 'Beras Premium 5kg', stock: '18 karung', price: 'Rp 72.500' },
    { id: '3', name: 'Gula Pasir 1kg', stock: '30 pcs', price: 'Rp 17.500' },
  ];

  return (
    <View style={[styles.safeArea, { paddingTop: insets.top }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Katalog Produk</Text>
        <TouchableOpacity style={styles.settingsButton} activeOpacity={0.7}>
          <Ionicons name="settings-sharp" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Info Card */}
        <View style={styles.infoCard}>
          {/* Badge */}
          <View style={styles.infoBadge}>
            <Ionicons name="cube" size={16} color="#2563EB" />
            <Text style={styles.infoBadgeText}>Inventaris Barang</Text>
          </View>

          {/* Title */}
          <Text style={styles.infoTitle}>Daftar Produk</Text>
        </View>

        {/* Product List */}
        <View style={styles.listContainer}>
          {products.map((item) => (
            <TouchableOpacity key={item.id} style={styles.productCard} activeOpacity={0.7}>
              {/* Left: Icon + Info */}
              <View style={styles.productLeft}>
                <View style={styles.productIcon}>
                  <Ionicons name="cube-outline" size={24} color="#2563EB" />
                </View>
                <View style={styles.productInfo}>
                  <Text style={styles.productName}>{item.name}</Text>
                  <Text style={styles.productStock}>{item.stock}</Text>
                </View>
              </View>

              {/* Right: Price */}
              <Text style={styles.productPrice}>{item.price}</Text>
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
    backgroundColor: '#EFF6FF',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    marginBottom: 14,
  },
  infoBadgeText: {
    fontSize: 11.5,
    fontWeight: '700',
    color: '#2563EB',
  },
  infoTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#0F172A',
  },
  listContainer: {
    gap: 12,
  },
  productCard: {
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
  productLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    gap: 12,
  },
  productIcon: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#EFF6FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  productInfo: {
    flex: 1,
  },
  productName: {
    fontSize: 14,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 3,
  },
  productStock: {
    fontSize: 12,
    color: '#64748B',
  },
  productPrice: {
    fontSize: 14,
    fontWeight: '800',
    color: '#2563EB',
  },
});
