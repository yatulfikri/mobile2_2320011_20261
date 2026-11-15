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
 * Layar Login - 100% sesuai Modul Praktikum 9
 * Validasi: Input Belum Lengkap
 */
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleLogin = () => {
    // Validasi: email & password tidak boleh kosong
    if (!email.trim() || !password.trim()) {
      Alert.alert(
        'Input Belum Lengkap',
        'Silakan masukkan email dan password Anda.'
      );
      return;
    }

    // Navigasi ke tabs/home
    router.replace({
      pathname: '/(tabs)/home' as any,
      params: { email: email.trim() },
    });
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
          {/* Header */}
          <View style={authStyles.header}>
            <View style={authStyles.logoBadge}>
              <Ionicons name="lock-closed" size={32} color="#2563EB" />
            </View>
            <Text style={authStyles.title}>Masuk ke Akun</Text>
            <Text style={authStyles.subtitle}>
              Masukkan email dan kata sandi untuk melanjutkan
            </Text>
          </View>

          {/* Form Card */}
          <View style={authStyles.card}>
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
            </View>

            {/* Button */}
            <TouchableOpacity 
              style={authStyles.button} 
              onPress={handleLogin}
              activeOpacity={0.8}
            >
              <Ionicons name="log-in" size={20} color="#FFFFFF" />
              <Text style={authStyles.buttonText}>Masuk</Text>
            </TouchableOpacity>
          </View>

          {/* Divider */}
          <View style={authStyles.dividerRow}>
            <View style={authStyles.dividerLine} />
            <Text style={authStyles.dividerText}>atau</Text>
            <View style={authStyles.dividerLine} />
          </View>

          {/* Footer */}
          <View style={authStyles.footer}>
            <Text style={authStyles.footerText}>Belum punya akun?</Text>
            <TouchableOpacity onPress={() => router.push('/register' as any)}>
              <Text style={authStyles.footerLink}>Daftar Sekarang</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
