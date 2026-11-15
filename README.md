# Aplikasi Mobile Marketplace - Modul 09 & 10

**Aplikasi Mobile 2 - Praktikum Modul 09 & 10**  
Aplikasi marketplace sederhana dengan autentikasi dan bottom tab navigation.

---

## 📱 Deskripsi

Aplikasi ini dibuat menggunakan **Expo + TypeScript + Expo Router** sebagai bagian dari praktikum Aplikasi Mobile 2. Fitur utama meliputi:

- **Autentikasi:** Login dan Register dengan validasi client-side
- **Bottom Tab Navigation:** 5 menu utama (Home, Produk, Transaksi, Report, Profil)
- **Dashboard Marketplace:** Kartu sambutan dan menu cepat
- **Safe Area Support:** Tab bar tidak tertutup tombol navigasi HP

**Catatan:** Ini adalah aplikasi UI prototype tanpa backend API.

---

## ✨ Fitur

### Modul 09: UI Autentikasi
- [x] Redirect otomatis ke layar Login
- [x] Form Login dengan validasi (email & password tidak kosong)
- [x] Form Register dengan validasi:
  - Semua field wajib diisi
  - Password minimal 6 karakter
  - Konfirmasi password harus cocok
- [x] Navigasi antar layar (Login ↔ Register ↔ Home)

### Modul 10: Bottom Tab & Dashboard
- [x] Bottom Tab Navigator dengan 5 menu:
  - 🏠 Home (Dashboard)
  - 📦 Produk
  - 💳 Transaksi
  - 📊 Report
  - 👤 Profil
- [x] Dashboard Home:
  - Kartu sambutan dengan email user
  - 5 menu cepat (Produk navigasi ke tab, lainnya Alert)
- [x] Safe Area Insets (tab bar dynamic height)
- [x] Tombol Logout di tab Profil

---

## 🛠️ Teknologi

- **Framework:** [Expo SDK 58](https://expo.dev) + [React Native 0.88](https://reactnative.dev)
- **Routing:** [Expo Router](https://docs.expo.dev/router/introduction/) (file-based routing)
- **Bahasa:** [TypeScript 6.0](https://www.typescriptlang.org)
- **Safe Area:** [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)

---

## 📦 Instalasi

### Prerequisites
- **Node.js** 18+ ([Download](https://nodejs.org))
- **npm** atau **yarn**
- **Expo Go** app di smartphone (untuk testing)

### Langkah Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/[username]/mobile2_[NOBP]_20262.git
   cd mobile2_[NOBP]_20262
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npx expo start
   ```

4. **Pilih platform:**
   - Tekan `a` untuk Android emulator
   - Tekan `i` untuk iOS simulator
   - Tekan `w` untuk Web browser
   - Scan QR code dengan **Expo Go** app di smartphone

---

## 📂 Struktur Folder

```
kuliah-app2/
├── src/
│   ├── app/                    # File-based routing
│   │   ├── _layout.tsx         # Root Stack Navigator
│   │   ├── index.tsx           # Entry point (redirect ke /login)
│   │   ├── login.tsx           # Layar Login
│   │   ├── register.tsx        # Layar Register
│   │   └── (tabs)/             # Tab Group
│   │       ├── _layout.tsx     # Bottom Tab Navigator
│   │       ├── home.tsx        # Dashboard Marketplace
│   │       ├── produk.tsx      # Placeholder
│   │       ├── transaksi.tsx   # Placeholder
│   │       ├── report.tsx      # Placeholder
│   │       └── profil.tsx      # Profil + Logout
│   └── styles/                 # Centralized StyleSheets
│       ├── authStyles.ts       # Login & Register styles
│       ├── homeStyles.ts       # Home dashboard styles
│       └── tabStyles.ts        # Bottom Tab styles
├── assets/                     # Images & fonts
├── docs/                       # Modul PDF (referensi)
├── screenshots/                # Screenshot aplikasi
├── requirements.md             # Functional requirements
├── design.md                   # Architecture & design
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🎮 Cara Menggunakan

### 1. Login
- Buka aplikasi → otomatis redirect ke layar **Login**
- Input email dan password (contoh: `test@mail.com`, `123456`)
- Klik **"Masuk"** → masuk ke Dashboard Home

### 2. Register (Opsional)
- Dari Login, klik **"Belum punya akun? Daftar Sekarang"**
- Isi semua field (Nama, Email, Password, Konfirmasi Password)
- Klik **"Daftar"** → kembali ke Login

### 3. Navigasi Tab
- **Home:** Dashboard dengan kartu sambutan & 5 menu cepat
- **Produk:** Placeholder (fitur siap dikembangkan)
- **Transaksi:** Placeholder
- **Report:** Placeholder
- **Profil:** Tampil email user + tombol Logout

### 4. Menu Cepat di Home
- Klik menu **"📦 Produk"** → pindah ke tab Produk
- Klik menu lainnya → Alert "Fitur ... siap dikembangkan"

### 5. Logout
- Buka tab **Profil**
- Klik tombol **"Logout"** → kembali ke Login

---

## 🧪 Testing

### Run TypeScript Check
```bash
npx tsc --noEmit
```

### Run ESLint
```bash
npx expo lint
```

### Manual Testing Checklist
Lihat file: [IMPLEMENTATION_SUMMARY.md](./IMPLEMENTATION_SUMMARY.md)

---

## 📸 Screenshots

Lihat folder: [screenshots/](./screenshots/)

| Login | Home | Produk |
|-------|------|--------|
| ![Login](./screenshots/01-login.png) | ![Home](./screenshots/02-home.png) | ![Produk](./screenshots/03-produk.png) |

| Transaksi | Report | Profil |
|-----------|--------|--------|
| ![Transaksi](./screenshots/04-transaksi.png) | ![Report](./screenshots/05-report.png) | ![Profil](./screenshots/06-profil.png) |

---

## 🔧 Konfigurasi

### Path Alias
```typescript
// tsconfig.json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

### Safe Area Insets
```typescript
// src/app/(tabs)/_layout.tsx
const insets = useSafeAreaInsets();

<Tabs
  screenOptions={{
    tabBarStyle: {
      paddingBottom: insets.bottom,  // Dynamic padding
      height: 60 + insets.bottom,
    }
  }}
/>
```

---

## 🚀 Build & Deploy (Opsional)

### Build APK (Android)
```bash
eas build --platform android --profile preview
```

### Build IPA (iOS)
```bash
eas build --platform ios --profile preview
```

**Note:** Membutuhkan [EAS CLI](https://docs.expo.dev/build/setup/) dan akun Expo.

---

## 📚 Referensi

- [Expo Documentation](https://docs.expo.dev)
- [Expo Router Documentation](https://docs.expo.dev/router/introduction/)
- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- Modul Praktikum 09 & 10 (folder `docs/`)

---

## 📝 Catatan Pengembangan

### Known Limitations
- **Backend API:** Tidak ada, semua data dummy/hardcoded
- **State Management:** Tidak menggunakan Redux/Zustand
- **Local Storage:** Tidak menyimpan session/token
- **Form Validation:** Client-side only (tanpa library eksternal)

### Future Enhancements
- Integrasi dengan REST API Laravel
- State management (Redux Toolkit)
- Persistent login (AsyncStorage + JWT)
- Form validation library (Formik + Yup)
- Icon pack (Ionicons/FontAwesome)
- Dark mode support

---

## 👨‍💻 Author

**[NAMA LENGKAP]**  
**NIM/NPM:** [NOBP]  
**Kelas:** [KELAS]  
**Mata Kuliah:** Aplikasi Mobile 2  
**Semester:** 7

---

## 📄 License

Project ini dibuat untuk keperluan akademik (praktikum).

---

## 🙏 Acknowledgments

- Dosen pengampu: [NAMA DOSEN]
- Modul praktikum: Aplikasi Mobile 2
- Template: Expo + TypeScript
- Framework: Expo & React Native Community

---

**Last Updated:** 2026-11-15  
**Version:** 1.0.0 (Modul 09 & 10 Complete)
