import { StyleSheet } from 'react-native';

/**
 * Styles untuk layar Home (Dashboard Marketplace)
 * 100% sesuai Modul Praktikum 10
 */
export const homeStyles = StyleSheet.create({
  // Container
  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  // Scroll Content
  scrollContent: {
    padding: 20,
  },

  // Welcome Card
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

  // Status Badge (Berhasil Masuk)
  statusBadge: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#ECFDF5',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 999,
    marginBottom: 10,
  },

  statusText: {
    fontSize: 11.5,
    fontWeight: '700' as '700',
    color: '#059669',
  },

  // Greeting Title
  greetingTitle: {
    fontSize: 22,
    fontWeight: '800' as '800',
    color: '#0F172A',
  },

  // Greeting Email
  greetingEmail: {
    fontSize: 13.5,
    color: '#2563EB',
    fontWeight: '600' as '600',
    marginTop: 2,
  },

  // Menu Card
  menuCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.05,
    shadowRadius: 12,
    elevation: 2,
  },

  // Menu Header
  menuHeader: {
    marginBottom: 16,
  },

  // Menu Section Title
  menuSectionTitle: {
    fontSize: 15,
    fontWeight: '800' as '800',
    color: '#0F172A',
  },

  // Menu Section Subtitle
  menuSectionSubtitle: {
    fontSize: 12,
    color: '#64748B',
    marginTop: 2,
  },

  // Menu Grid (5 items)
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    rowGap: 18,
  },

  // Menu Item
  menuItem: {
    width: '30%',
    alignItems: 'center',
  },

  // Menu Icon Wrappers dengan warna berbeda (5 menu)
  menuIconBlue: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#EFF6FF',
    borderColor: '#DBEAFE',
  },

  menuIconGreen: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#ECFDF5',
    borderColor: '#D1FAE5',
  },

  menuIconAmber: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#FFFBEB',
    borderColor: '#FEF3C7',
  },

  menuIconTeal: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#F0FDFA',
    borderColor: '#CCFBF1',
  },

  menuIconRose: {
    width: 56,
    height: 56,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    backgroundColor: '#FFF1F2',
    borderColor: '#FFE4E6',
  },

  // Menu Label
  menuLabel: {
    fontSize: 11.5,
    fontWeight: '700' as '700',
    color: '#1E293B',
    textAlign: 'center',
    marginTop: 6,
  },
});
