# Everlasting Community — Frontend

Aplikasi manajemen anggota club Uma Musume (React + Vite + Bootstrap + jQuery).
Entitas data utama: **Anggota**.

## Menjalankan
```bash
npm install
npm run dev      # buka http://localhost:5173
```

## Struktur
- `src/App.jsx` — state `anggota`, fungsi tambah/hapus, menyusun komponen
- `src/components/` — HeaderAplikasi, BannerClub, RingkasanStatistik, FormTambahAnggota, DaftarAnggota, KartuAnggota, KomunitasLink, KembaliKeAtas
- jQuery dipakai di HeaderAplikasi (smooth scroll), KartuAnggota (fade-in), KembaliKeAtas (tombol ke atas)

Catatan: data hanya tersimpan di state (hilang saat refresh) sampai backend dibuat pada Pekan 11.
