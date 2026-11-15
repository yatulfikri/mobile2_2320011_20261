import { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Alert,
  ScrollView,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { authStyles } from '@/styles/authStyles';

/**
 * Layar Register - 100% sesuai Modul Praktikum 9
 * Validasi 3 tahap: Empty, Length, Match
 */
export default function Register() {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleRegister = () => {
    // Validasi 1: Semua field harus diisi
    if (!nama.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
      Alert.alert(
        'Pendaftaran Gagal',
        'Semua kolom formulir wajib diisi.'
      );
      return;
    }

    // Validasi 2: Password minimal 6 karakter
    if (password.length < 6) {
      Alert.alert(
        'Kata Sandi Lemah',
        'Kata sandi minimal terdiri dari 6 karakter.'
      );
      return;
    }

    // Validasi 3: Konfirmasi password harus sama
    if (password !== confirmPassword) {
      Alert.alert(
        'Tidak Cocok',
        'Konfirmasi kata sandi tidak sama dengan kata sandi.'
      );
      return;
    }

    // Sukses: Tampilkan alert dengan nama user
    Alert.alert(
      'Pendaftaran Berhasil!',
      `Akun atas nama ${nama.trim()} siap digunakan. Silakan masuk melalui halaman Login.`,
      [{ text: 'Ke Login', onPress: () => router.back() }]
    );
  };

  return (
    <SafeAreaView style={authStyles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView
          contentContainerStyle={authStyles.scrollContent}
          keyboardShouldPersistTaps="handled"
        >
          {/* Back Button */}
          <TouchableOpacity 
            style={authStyles.backButton}
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#0F172A" />
          </TouchableOpacity>

          {/* Header */}
          <View style={authStyles.header}>
            <View style={authStyles.logoBadge}>
              <Ionicons name="person-add" size={32} color="#2563EB" />
            </View>
            <Text style={authStyles.title}>Buat Akun Baru</Text>
            <Text style={authStyles.subtitle}>
              Lengkapi formulir di bawah untuk mendaftar
            </Text>
          </View>

          {/* Form Card */}
          <View style={authStyles.card}>
            {/* Nama */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Nama Lengkap</Text>
              <View style={[
                authStyles.inputWrapper,
                focusedField === 'nama' && authStyles.inputWrapperFocused
              ]}>
                <Ionicons 
                  name="person" 
                  size={20} 
                  color={focusedField === 'nama' ? '#2563EB' : '#64748B'} 
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Contoh: Muhammad Rizki"
                  placeholderTextColor="#94A3B8"
                  value={nama}
                  onChangeText={setNama}
                  onFocus={() => setFocusedField('nama')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Email */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Email</Text>
              <View style={[
                authStyles.inputWrapper,
                focusedField === 'email' && authStyles.inputWrapperFocused
              ]}>
                <Ionicons 
                  name="mail" 
                  size={20} 
                  color={focusedField === 'email' ? '#2563EB' : '#64748B'} 
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="nama@kampus.ac.id"
                  placeholderTextColor="#94A3B8"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                />
              </View>
            </View>

            {/* Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Kata Sandi</Text>
              <View style={[
                authStyles.inputWrapper,
                focusedField === 'password' && authStyles.inputWrapperFocused
              ]}>
                <Ionicons 
                  name="lock-closed" 
                  size={20} 
                  color={focusedField === 'password' ? '#2563EB' : '#64748B'} 
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Minimal 6 karakter"
                  placeholderTextColor="#94A3B8"
                  value={password}
                  onChangeText={setPassword}
                  secureTextEntry={!showPassword}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity 
                  style={authStyles.eyeButton}
                  onPress={() => setShowPassword(!showPassword)}
                >
                  <Ionicons 
                    name={showPassword ? 'eye-off' : 'eye'} 
                    size={20} 
                    color="#64748B" 
                  />
                </TouchableOpacity>
              </View>
              <Text style={authStyles.helperText}>
                Gunakan kombinasi huruf dan angka.
              </Text>
            </View>

            {/* Confirm Password */}
            <View style={authStyles.formGroup}>
              <Text style={authStyles.label}>Konfirmasi Kata Sandi</Text>
              <View style={[
                authStyles.inputWrapper,
                focusedField === 'confirm' && authStyles.inputWrapperFocused
              ]}>
                <Ionicons 
                  name="lock-closed" 
                  size={20} 
                  color={focusedField === 'confirm' ? '#2563EB' : '#64748B'} 
                  style={{ marginRight: 10 }}
                />
                <TextInput
                  style={authStyles.input}
                  placeholder="Ulangi kata sandi"
                  placeholderTextColor="#94A3B8"
                  value={confirmPassword}
                  onChangeText={setConfirmPassword}
                  secureTextEntry={!showConfirmPassword}
                  onFocus={() => setFocusedField('confirm')}
                  onBlur={() => setFocusedField(null)}
                />
                <TouchableOpacity 
                  style={authStyles.eyeButton}
                  onPress={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  <Ionicons 
                    name={showConfirmPassword ? 'eye-off' : 'eye'} 
                    size={20} 
                    color="#64748B" 
                  />
                </TouchableOpacity>
              </View>
            </View>

            {/* Button */}
            <TouchableOpacity 
              style={authStyles.button} 
              onPress={handleRegister}
              activeOpacity={0.8}
            >
              <Ionicons name="checkmark-circle" size={20} color="#FFFFFF" />
              <Text style={authStyles.buttonText}>Daftar</Text>
            </TouchableOpacity>
          </View>

          {/* Footer */}
          <View style={authStyles.footer}>
            <Text style={authStyles.footerText}>Sudah punya akun?</Text>
            <TouchableOpacity onPress={() => router.back()}>
              <Text style={authStyles.footerLink}>Masuk</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
