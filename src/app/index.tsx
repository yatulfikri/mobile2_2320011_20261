import { router } from 'expo-router';
import { useEffect } from 'react';

/**
 * Entry Point - Redirect otomatis ke /login
 */
export default function Index() {
    useEffect(() => {
        // Redirect ke halaman login saat aplikasi dibuka
        router.replace('/login' as any);
    }, []);

    return null; // Tidak render apapun
}
