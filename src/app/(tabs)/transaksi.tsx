import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
const DUMMY_TRANSAKSI = [
  {
    id: "TRX-001",
    item: "3 Item Belanja",
    waktu: "10:15 WIB",
    total: "Rp 128.000",
  },
  {
    id: "TRX-002",
    item: "5 Item Belanja",
    waktu: "11:02 WIB",
    total: "Rp 214.500",
  },
];
export default function TransaksiScreen() {
  return (
    <ScrollView
      style={tabStyles.screenContainer}
      contentContainerStyle={tabStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={tabStyles.card}>
        <View style={tabStyles.badgeGreen}>
          <Ionicons name="cart" size={14} color="#059669" />
          <Text style={tabStyles.badgeGreenText}>Kasir &amp; Keranjang</Text>
        </View>
        <Text style={[tabStyles.sectionTitle, { marginTop: 10 }]}>
          Transaksi Berjalan
        </Text>
        <Text style={tabStyles.sectionSubtitle}>
          Ringkasan keranjang belanja dan riwayat transaksi kasir hari ini.
        </Text>
      </View>
      {DUMMY_TRANSAKSI.map((trx) => (
        <View key={trx.id} style={tabStyles.listItemCard}>
          <View style={tabStyles.listItemLeft}>
            <View style={tabStyles.iconBox}>
              <Ionicons name="cart-outline" size={20} color="#2563EB" />
            </View>
            <View>
              <Text style={tabStyles.listItemTitle}>{trx.id}</Text>
              <Text style={tabStyles.listItemMeta}>
                {trx.item} • {trx.waktu}
              </Text>
            </View>
          </View>
          <Text style={tabStyles.listItemPrice}>{trx.total}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
