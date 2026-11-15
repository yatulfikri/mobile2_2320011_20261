import { tabStyles } from '@/styles/tabStyles';
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

/**
 * Bottom Tab Navigator dengan 5 menu
 * Icons: Ionicons dari @expo/vector-icons
 * Safe Area: tabBarStyle menggunakan useSafeAreaInsets()
 */
export default function TabLayout() {
  const insets = useSafeAreaInsets();

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#2563EB', // Primary blue
        tabBarInactiveTintColor: '#94A3B8', // Text helper gray
        tabBarStyle: tabStyles.tabBarStyle(insets), // Dynamic height berdasarkan inset
        tabBarLabelStyle: tabStyles.tabBarLabelStyle,
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: 'Home',
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={(color || '#94A3B8') as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="produk"
        options={{
          title: 'Produk',
          tabBarLabel: 'Produk',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cube' : 'cube-outline'} size={24} color={(color || '#94A3B8') as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaksi"
        options={{
          title: 'Transaksi',
          tabBarLabel: 'Transaksi',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'cart' : 'cart-outline'} size={24} color={(color || '#94A3B8') as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'Report',
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'stats-chart' : 'stats-chart-outline'} size={24} color={(color || '#94A3B8') as string} />
          ),
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarLabel: 'Profil',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons name={focused ? 'people' : 'people-outline'} size={24} color={(color || '#94A3B8') as string} />
          ),
        }}
      />
    </Tabs>
  );
}
