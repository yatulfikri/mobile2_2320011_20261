import { StyleSheet, Text, View } from "react-native";

/**
 * Lab Activity #3: Uji Lisan Meja Dosen (Code Defense)
 * Demonstrasi keunggulan TSX - Perlindungan Kontrak Data
 * 
 * Studi Kasus: Bahaya Runtime
 * Perbandingan kerentanan crash pada file .jsx versus ketahanan kontrak pada .tsx
 */

// Interface memberikan instruksi tegas: props.nama dan props.nim WAJIB string
interface CardProps {
    nama: string;
    nim: string;
}

/**
 * Versi .tsx (Perlindungan Kontrak Data)
 * 
 * Keunggulan:
 * - Jika AI mengarang nama properti yang tidak eksis, TypeScript seketika mencoret merah kode tersebut
 * - Props dijamin string - 100% aman di runtime
 * - Aman 100%: nama dijamin string, tidak akan crash
 * - Editor langsung menandai error sebelum dijalankan
 */
export default function CardTSXDemo({ nama, nim }: CardProps) {
    return (
        <View style={styles.card}>
            {/* Aman 100%: nama dijamin string */}
            <Text style={styles.name}>{nama.toUpperCase()}</Text>
            <Text style={styles.nim}>{nim}</Text>
        </View>
    );
}

/*
 * Kontras dengan versi .jsx (Rawan Force Close):
 * 
 * function Card(props) {
 *   return (
 *     <View>
 *       <Text>{props.nama.toUpperCase()}</Text>
 *       <Text>{props.nim}</Text>
 *     </View>
 *   );
 * }
 * 
 * Masalah:
 * - Di browser web, typo hanya memicu log konsol
 * - Di ponsel Android/iOS, error langsung menutup paksa aplikasi
 * - Baru ketahuan saat diuji coba (runtime)
 * - Tinggi akibat undefined object
 */

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#fff",
        padding: 16,
        borderRadius: 8,
        marginVertical: 8,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
        color: "#1a1a1a",
    },
    nim: {
        fontSize: 14,
        color: "#666",
    },
});
