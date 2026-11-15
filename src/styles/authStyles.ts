import { StyleSheet } from 'react-native';

/**
 * Styles untuk layar autentikasi (Login & Register)
 * 100% sesuai Modul Praktikum 9
 */
export const authStyles = StyleSheet.create({
  // Safe Area Container
  safeArea: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // Scroll Content
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 22,
    paddingVertical: 28,
  },

  // Back Button (Register only)
  backButton: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E2E8F0',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 18,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },

  // Header Area
  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  // Logo Badge
  logoBadge: {
    width: 64,
    height: 64,
    borderRadius: 20,
    backgroundColor: '#EFF6FF',
    borderWidth: 1.5,
    borderColor: '#DBEAFE',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  // Title
  title: {
    fontSize: 24,
    fontWeight: '800' as '800',
    color: '#0F172A',
    letterSpacing: -0.3,
    textAlign: 'center',
  },

  // Subtitle
  subtitle: {
    fontSize: 13.5,
    color: '#64748B',
    textAlign: 'center',
    marginTop: 6,
    lineHeight: 20,
    paddingHorizontal: 10,
  },

  // Card (Form Container)
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.06,
    shadowRadius: 18,
    elevation: 3,
  },

  // Form Group
  formGroup: {
    marginBottom: 16,
  },

  // Label
  label: {
    fontSize: 13,
    fontWeight: '600' as '600',
    color: '#334155',
    marginBottom: 7,
  },

  // Input Wrapper
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8FAFC',
    borderWidth: 1.5,
    borderColor: '#E2E8F0',
    borderRadius: 14,
    paddingHorizontal: 14,
    height: 50,
  },

  // Input Wrapper Focused
  inputWrapperFocused: {
    backgroundColor: '#FFFFFF',
    borderColor: '#2563EB',
  },

  // Input Text
  input: {
    flex: 1,
    fontSize: 14,
    color: '#0F172A',
    paddingVertical: 0,
  },

  // Eye Button (Password Toggle)
  eyeButton: {
    paddingLeft: 8,
    paddingVertical: 4,
  },

  // Helper Text
  helperText: {
    fontSize: 11.5,
    color: '#94A3B8',
    marginTop: 5,
  },

  // Primary Button
  button: {
    flexDirection: 'row',
    backgroundColor: '#2563EB',
    borderRadius: 14,
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
    shadowColor: '#2563EB',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.25,
    shadowRadius: 12,
    elevation: 4,
  },

  // Button Text
  buttonText: {
    fontSize: 15,
    fontWeight: '700' as '700',
    color: '#FFFFFF',
  },

  // Divider Row
  dividerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },

  // Divider Line
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: '#E2E8F0',
  },

  // Divider Text
  dividerText: {
    fontSize: 12,
    color: '#94A3B8',
    fontWeight: '500' as '500',
    marginHorizontal: 12,
  },

  // Footer
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 18,
  },

  // Footer Text
  footerText: {
    fontSize: 13.5,
    color: '#64748B',
  },

  // Footer Link
  footerLink: {
    fontSize: 13.5,
    fontWeight: '700' as '700',
    color: '#2563EB',
    marginLeft: 4,
  },
});
