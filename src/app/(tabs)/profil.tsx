import {
  clearAuthSession,
  getAuthSession,
  logoutApi,
  type UserData,
} from "@/services/authService";
import { tabStyles } from "@/styles/tabStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Alert,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// Profil Screen
export default function ProfilScreen() {
  const [user, setUser] = useState<UserData | null>(null);
  const [loadingLogout, setLoadingLogout] = useState(false);

  useEffect(() => {
    let isActive = true;

    getAuthSession()
      .then((session) => {
        if (isActive && session) {
          setUser(session.user);
        }
      })
      .catch((error: unknown) => {
        console.error("Gagal memuat sesi pengguna:", error);
      });

    return () => {
      isActive = false;
    };
  }, []);

  const handleLogout = async () => {
    if (loadingLogout) {
      return;
    }

    setLoadingLogout(true);
    try {
      const session = await getAuthSession();
      if (session?.token) {
        await logoutApi(session.token);
      }
      await clearAuthSession();
      router.replace("/login");
    } catch (error) {
      Alert.alert(
        "Logout Gagal",
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat keluar dari akun.",
      );
    } finally {
      setLoadingLogout(false);
    }
  };

  return (
    <ScrollView
      style={tabStyles.screenContainer}
      contentContainerStyle={tabStyles.scrollContent}
      showsVerticalScrollIndicator={false}
    >
      {/* Header Profil */}
      <View style={tabStyles.card}>
        {/* Profile Avatar */}
        <View style={tabStyles.profileAvatar}>
          <Ionicons name="people" size={30} color="#2563EB" />
        </View>

        {/* Informasi Profil */}
        <Text style={tabStyles.sectionTitle}>Profil Pengguna</Text>

        {user ? (
          <>
            <Text style={tabStyles.sectionSubtitle}>{user.name}</Text>
            <Text style={tabStyles.sectionSubtitle}>{user.email}</Text>
            {user.no_hp ? (
              <Text style={tabStyles.sectionSubtitle}>{user.no_hp}</Text>
            ) : null}
          </>
        ) : (
          <Text style={tabStyles.sectionSubtitle}>
            Informasi akun aktif dan pengaturan sesi aplikasi Mobile 2.
          </Text>
        )}
      </View>

      {/* Tombol Logout */}
      <TouchableOpacity
        style={tabStyles.logoutButton}
        activeOpacity={0.8}
        disabled={loadingLogout}
        onPress={handleLogout}
      >
        {loadingLogout ? (
          <ActivityIndicator color="#DC2626" />
        ) : (
          <>
            <Ionicons name="log-out-outline" size={20} color="#DC2626" />
            <Text style={tabStyles.logoutButtonText}>Keluar dari Akun</Text>
          </>
        )}
      </TouchableOpacity>
    </ScrollView>
  );
}
