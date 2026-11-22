import { registerApi } from "@/services/authService";
import { authStyles } from "@/styles/authStyles";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useState } from "react";
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function RegisterScreen() {
  const [nama, setNama] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [noHp, setNoHp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focusedField, setFocusedField] = useState<
    "nama" | "email" | "noHp" | "password" | "confirm" | null
  >(null);
  const handleRegister = async () => {
    if (
      !nama.trim() ||
      !email.trim() ||
      !noHp.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      Alert.alert("Pendaftaran Gagal", "Semua kolom formulir wajib diisi.");
      return;
    }
    if (password.length < 6) {
      Alert.alert(
        "Kata Sandi Lemah",
        "Kata sandi minimal terdiri dari 6 karakter.",
      );
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert(
        "Tidak Cocok",
        "Konfirmasi kata sandi tidak sama dengan kata sandi.",
      );
      return;
    }
    setLoading(true);
    try {
      const result = await registerApi({
        name: nama.trim(),
        email: email.trim(),
        no_hp: noHp.trim(),
        password,
        password_confirmation: confirmPassword,
      });
      Alert.alert(
        "Pendaftaran Berhasil!",
        `Akun atas nama ${result.user.name} telah tersimpan ke database. Silakan masuk melalui halaman Login.`,
        [{ text: "Ke Login", onPress: () => router.back() }],
      );
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "Terjadi kesalahan saat mendaftarkan akun.";
      Alert.alert("Pendaftaran Gagal", message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <SafeAreaView style={authStyles.safeArea}>
      <KeyboardAvoidingView
        style={authStyles.flexContainer}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          {/* Tombol Kembali Kustom */}
          <TouchableOpacity
            style={authStyles.topBackButton}
            disabled={loading}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#0F172A" />
          </TouchableOpacity>
          <View style={authStyles.headerArea}>
            <View style={authStyles.logoBadge}>
              <Ionicons name="person-add" size={28} color="#2563EB" />
            </View>
            <Text style={authStyles.title}>Buat Akun Baru</Text>
            <Text style={authStyles.subtitle}>
              Lengkapi data diri Anda untuk mendaftarkan akun baru
            </Text>
          </View>
          <View style={authStyles.card}>
            {/* Nama Lengkap */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Nama Lengkap</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "nama" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={focusedField === "nama" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: Muhammad Rizki"
                  placeholderTextColor="#94A3B8"
                  editable={!loading}
                  value={nama}
                  onChangeText={setNama}
                  onFocus={() => setFocusedField("nama")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>
            {/* Email */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Alamat Email</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "email" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="mail-outline"
                  size={20}
                  color={focusedField === "email" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="nama@kampus.ac.id"
                  placeholderTextColor="#94A3B8"
                  keyboardType="email-address"
                  autoCapitalize="none"
                  editable={!loading}
                  value={email}
                  onChangeText={setEmail}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>
            {/* Nomor HP */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Nomor HP / WhatsApp</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "noHp" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="call-outline"
                  size={20}
                  color={focusedField === "noHp" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: 081234567890"
                  placeholderTextColor="#94A3B8"
                  keyboardType="phone-pad"
                  editable={!loading}
                  value={noHp}
                  onChangeText={setNoHp}
                  onFocus={() => setFocusedField("noHp")}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>
            {/* Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Kata Sandi</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "password" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={focusedField === "password" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Minimal 6 karakter"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showPassword}
                  autoCapitalize="none"
                  editable={!loading}
                  value={password}
                  onChangeText={setPassword}
                  onFocus={() => setFocusedField("password")}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity
                  style={authStyles.eyeButton}
                  disabled={loading}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons
                    name={showPassword ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
              <Text style={authStyles.helperText}>
                Gunakan kombinasi huruf dan angka.
              </Text>
            </View>
            {/* Konfirmasi Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Konfirmasi Kata Sandi</Text>
              <View
                style={[
                  authStyles.inputWrapper,
                  focusedField === "confirm" && authStyles.inputWrapperFocused,
                ]}
              >
                <Ionicons
                  name="checkmark-circle-outline"
                  size={20}
                  color={focusedField === "confirm" ? "#2563EB" : "#64748B"}
                  style={authStyles.inputIcon}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Ulangi kata sandi"
                  placeholderTextColor="#94A3B8"
                  secureTextEntry={!showConfirm}
                  autoCapitalize="none"
                  editable={!loading}
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  onFocus={() => setFocusedField("confirm")}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity
                  style={authStyles.eyeButton}
                  disabled={loading}
                  onPress={() => setShowConfirm(!showConfirm)}
                >
                  <Ionicons
                    name={showConfirm ? "eye-off-outline" : "eye-outline"}
                    size={20}
                    color="#64748B"
                  />
                </TouchableOpacity>
              </View>
            </View>
            <TouchableOpacity
              style={[
                authStyles.primaryButton,
                loading && authStyles.primaryButtonDisabled,
              ]}
              activeOpacity={0.85}
              disabled={loading}
              onPress={handleRegister}
            >
              {loading ? (
                <ActivityIndicator color="#FFFFFF" />
              ) : (
                <>
                  <Text style={authStyles.primaryButtonText}>Daftar Akun</Text>
                  <Ionicons name="checkmark" size={19} color="#FFFFFF" />
                </>
              )}
            </TouchableOpacity>
            <View style={[authStyles.footerRow, { marginTop: 18 }]}>
              <Text style={authStyles.footerText}>Sudah memiliki akun?</Text>
              <TouchableOpacity
                disabled={loading}
                onPress={() => router.back()}
              >
                <Text style={authStyles.footerLink}>Masuk di sini</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
