# Perbandingan JSX vs TSX - Studi Kasus Runtime

## 🔴 Versi JSX (BERBAHAYA)

```jsx
// ❌ File: card.jsx
// Tidak ada kontrak tipe data - RAWAN CRASH!

export default function Card(props) {
  return (
    <View style={styles.card}>
      {/* BAHAYA: Jika props.nama undefined, aplikasi CRASH! */}
      <Text style={styles.name}>
        {props.nama.toUpperCase()}
      </Text>
      <Text style={styles.nim}>
        {props.nim}
      </Text>
    </View>
  );
}
```

### Masalah JSX:

#### 1️⃣ **Runtime Error (Force Close)**
```jsx
// Penggunaan:
<Card nim="12345" />
// ❌ CRASH! props.nama undefined
// Error: Cannot read property 'toUpperCase' of undefined

// Di browser web: Hanya log error di console
// Di mobile (Android/iOS): APLIKASI TERTUTUP PAKSA!
```

#### 2️⃣ **Typo Tidak Terdeteksi**
```jsx
<Card nama="John" nimm="12345" />
//                ^^^^ typo, tapi editor tidak warning!
```

#### 3️⃣ **IntelliSense Terbatas**
```
Saat mengetik <Card |
              ^^^^^^
Editor tidak tahu props apa yang tersedia
Harus cek dokumentasi atau file asli
```

#### 4️⃣ **Refactoring Berbahaya**
```jsx
// Developer mengubah nama props di komponen:
// props.nama → props.fullName

// Semua pemanggilan Card lama tetap jalan tanpa warning
// Bug baru muncul saat runtime!
```

---

## 🟢 Versi TSX (AMAN)

```tsx
// ✅ File: card.tsx
// Kontrak tipe data KETAT - AMAN dari CRASH!

interface CardProps {
  nama: string;
  nim: string;
}

export default function Card({ nama, nim }: CardProps) {
  return (
    <View style={styles.card}>
      {/* AMAN: TypeScript menjamin nama adalah string */}
      <Text style={styles.name}>
        {nama.toUpperCase()}
      </Text>
      <Text style={styles.nim}>
        {nim}
      </Text>
    </View>
  );
}
```

### Keunggulan TSX:

#### 1️⃣ **Compile-Time Error (Cegah Crash)**
```tsx
// Penggunaan:
<Card nim="12345" />
//    ^^^^^^^^^^^ 
// ❌ ERROR DI EDITOR (sebelum run):
// Property 'nama' is missing in type '{ nim: string; }'
// but required in type 'CardProps'

// Kode bahkan tidak bisa di-run sampai diperbaiki!
```

#### 2️⃣ **Typo Langsung Terdeteksi**
```tsx
<Card nama="John" nimm="12345" />
//                ^^^^ 
// ❌ GARIS MERAH DI EDITOR:
// Object literal may only specify known properties,
// and 'nimm' does not exist in type 'CardProps'
```

#### 3️⃣ **IntelliSense Penuh**
```
Saat mengetik <Card |
              ^^^^^^
Editor otomatis menampilkan:
- nama: string (required)
- nim: string (required)

Auto-complete tersedia!
```

#### 4️⃣ **Refactoring Aman**
```tsx
// Developer mengubah interface:
interface CardProps {
  fullName: string; // ← rename dari 'nama'
  nim: string;
}

// Semua pemanggilan Card langsung error!
// <Card nama="..." nim="..." />
//       ^^^^ Error: 'nama' tidak ada di CardProps

// Paksa developer update semua pemanggilan
// TIDAK ADA bug tersembunyi!
```

---

## 📊 Tabel Perbandingan Lengkap

| **Aspek**                    | **JSX (.jsx)** 🔴              | **TSX (.tsx)** 🟢              |
|------------------------------|--------------------------------|--------------------------------|
| **Deteksi Error**            | Runtime (saat app jalan)       | Compile-time (di editor)       |
| **Crash di Mobile**          | Tinggi (force close)           | Sangat rendah (dicegah)        |
| **IntelliSense**             | Terbatas, harus tebak          | Lengkap otomatis               |
| **Refactoring**              | Berbahaya (silent bugs)        | Aman (error langsung muncul)   |
| **Typo Props**               | Tidak terdeteksi               | Langsung garis merah           |
| **Dokumentasi Props**        | Manual (harus cek code)        | Otomatis (dari interface)      |
| **AI Hallucination**         | Tidak terlindungi              | Terlindungi (type error)       |
| **Learning Curve**           | Mudah (awal)                   | Sedikit lebih tinggi           |
| **Maintainability**          | Sulit (banyak runtime error)   | Mudah (error tertangkap awal)  |
| **Production Readiness**     | Berisiko                       | Production-ready               |

---

## 🎯 Demonstrasi Kasus Nyata

### Skenario: Update Struktur Data

**Situasi:** Backend mengubah response API dari `{ nama, nim }` menjadi `{ fullName, studentId }`

#### JSX:
```jsx
// Component tetap pakai props lama
function Card(props) {
  return <Text>{props.nama}</Text>
}

// Pemanggilan dengan data baru
<Card {...apiResponse} />
// ❌ props.nama undefined
// ❌ Crash di production!
// ❌ User komplain, rating app turun
```

#### TSX:
```tsx
// Update interface
interface CardProps {
  fullName: string; // ← update
  studentId: string; // ← update
}

// Component update implementasi
function Card({ fullName, studentId }: CardProps) {
  return <Text>{fullName}</Text>
}

// Pemanggilan dengan data baru
<Card {...apiResponse} />
// ✅ Jika apiResponse punya structure berbeda,
//    TypeScript error di editor!
// ✅ Tidak mungkin deploy code yang broken
```

---

## 💡 Kesimpulan

### Mengapa Pilih TSX?

1. **Keamanan Runtime**: 90% crash dicegah sebelum kode jalan
2. **Developer Experience**: IntelliSense penuh, refactoring aman
3. **Team Collaboration**: Interface = dokumentasi hidup
4. **AI-Assisted Coding**: TypeScript cegah halusinasi AI
5. **Production Ready**: Less bugs, more confidence

### Quote Materi Dosen:

> "Format .tsx menangkap 90% kesalahan pengetikan properti di editor laptop 
> sebelum kode sempat dijalankan di HP mahasiswa."

> "Di browser web, typo hanya memicu log konsol. Di ponsel Android/iOS, 
> error langsung menutup paksa aplikasi."

---

## 🧪 Lab Exercise

### Tugas untuk Mahasiswa:

1. **Buat komponen JSX sederhana** tanpa type checking
2. **Coba pass props yang salah** - lihat apa yang terjadi
3. **Convert ke TSX** dengan interface
4. **Bandingkan error messages** di editor
5. **Diskusikan pengalaman** di class

### Pertanyaan Code Defense:

1. Mengapa interface penting di mobile development?
2. Apa perbedaan error handling web vs mobile?
3. Kapan boleh pakai JSX? (Jawaban: Hampir tidak pernah!)
4. Bagaimana TypeScript bantu kerja tim?

---

**REKAYASA SEBELUM KODING**  
*Pahami struktur, tegakkan disiplin tipe data, kuasai setiap baris kode.*

**LABORATORIUM PEMROGRAMAN MOBILE • JURUSAN TEKNOLOGI INFORMASI**
