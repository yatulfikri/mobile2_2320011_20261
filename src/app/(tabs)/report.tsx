import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";
export default function ReportScreen() {
  return (
    <ScrollView
      style={tabStyles.screenContainer}
      contentContainerStyle={tabStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      <View style={tabStyles.card}>
        <View style={tabStyles.badgeBlue}>
          <Ionicons name="bar-chart" size={14} color="#2563EB" />
          <Text style={tabStyles.badgeBlueText}>Ringkasan Penjualan</Text>
        </View>
        <Text style={[tabStyles.sectionTitle, { marginTop: 10 }]}>
          Laporan Toko
        </Text>
        <Text style={tabStyles.sectionSubtitle}>
          Pantau total omset harian, jumlah transaksi, dan performa penjualan.
        </Text>
      </View>
      <View style={tabStyles.statGrid}>
        <View style={tabStyles.statCard}>
          <Text style={tabStyles.statLabel}>Omset Hari Ini</Text>
          <Text style={tabStyles.statValue}>Rp 1.850.000</Text>
        </View>
        <View style={tabStyles.statCard}>
          <Text style={tabStyles.statLabel}>Total Nota</Text>
          <Text style={tabStyles.statValue}>24 Transaksi</Text>
        </View>
      </View>
    </ScrollView>
  );
}
