import { Stack } from 'expo-router';

/**
 * Root Layout - Stack Navigator
 * Route: index → login → register → (tabs)
 */
export default function RootLayout() {
    return (
        <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name="index" />
            <Stack.Screen name="login" />
            <Stack.Screen name="register" />
            <Stack.Screen
                name="(tabs)"
                options={{
                    headerShown: false,
                    gestureEnabled: false, // Disable swipe back dari tabs ke login
                }}
            />
        </Stack>
    );
}
