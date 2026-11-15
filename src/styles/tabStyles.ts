import { EdgeInsets } from 'react-native-safe-area-context';

/**
 * Styles untuk Bottom Tab Navigator
 * 100% sesuai Modul Praktikum 10
 */

// Tab Navigation Colors
export const tabNavColors = {
  active: '#2563EB',
  inactive: '#64748B',
  headerBg: '#FFFFFF',
  headerTint: '#0F172A',
  surface: '#FFFFFF',
  border: '#E2E8F0',
};

export const tabStyles = {
  /**
   * Tab Bar Style dengan Safe Area Insets
   * Height: 62 + Math.max(insets.bottom, 8)
   */
  tabBarStyle: (insets: EdgeInsets) => ({
    backgroundColor: tabNavColors.surface,
    borderTopWidth: 1,
    borderTopColor: tabNavColors.border,
    shadowColor: '#0F172A',
    shadowOffset: { width: 0, height: -4 },
    shadowOpacity: 0.04,
    shadowRadius: 12,
    elevation: 8,
    height: 62 + Math.max(insets.bottom, 8),
    paddingBottom: Math.max(insets.bottom, 8),
  }),

  /**
   * Tab Bar Item Style
   */
  tabBarItemStyle: {
    paddingTop: 6,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  /**
   * Tab Bar Label Style
   */
  tabBarLabelStyle: {
    fontSize: 11,
    fontWeight: '600' as '600',
    marginTop: 3,
  },

  /**
   * Icon Container untuk Tab
   */
  iconContainer: {
    width: 28,
    height: 28,
    alignItems: 'center' as const,
    justifyContent: 'center' as const,
  },

  /**
   * Header Style untuk Tab Screens
   */
  headerStyle: {
    backgroundColor: tabNavColors.headerBg,
    borderBottomWidth: 1,
    borderBottomColor: tabNavColors.border,
  },

  /**
   * Header Title Style
   */
  headerTitleStyle: {
    fontSize: 17,
    fontWeight: '700' as '700',
    color: tabNavColors.headerTint,
  },
};
