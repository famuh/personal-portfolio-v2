# Panduan screenshot dari Figma

Project Figma biasanya terdiri dari banyak page dan frame, jadi screenshot satu frame saja hampir tidak pernah bercerita. Untuk portfolio, yang kamu butuhkan adalah satu **presentation board**: frame khusus yang berisi beberapa layar terbaik, disusun rapi, lalu di-export jadi satu gambar.

Placeholder di `public/assets/illustrations/figma-livestock.svg` dan `figma-preloved.svg` adalah contoh board itu. Tiru ukuran dan susunannya.

## 1. Buat frame "Portfolio cover"

- Buat **page baru** di file Figma-mu, beri nama `Portfolio`. Jangan mengubah page desain aslinya.
- Buat frame **1600 × 1000 px** (rasio 16:10, sama dengan kartu di website).
- Background: warna netral yang lembut, misalnya `#F3F5F1`. Boleh diberi dot grid tipis.
- Sisakan margin sekitar **80 px** di semua sisi.

## 2. Pilih 3–4 layar yang bercerita

Jangan pilih layar acak. Pilih layar yang mengikuti satu alur, dari awal sampai hasil:

| Jenis project | Layar yang dipilih (contoh) |
|---|---|
| Sistem / dashboard (mis. Livestock & distributor) | 1 dashboard desktop sebagai fokus + 2 layar mobile dari alur utama (input data, transaksi) |
| Marketplace / aplikasi konsumen (mis. Preloved) | 4 layar mobile berurutan: browse → detail → checkout → dashboard penjual |
| Redesign | Before di kiri, after di kanan |

Tips:
- Pakai **instance/copy** layar dari page aslinya (Ctrl/Cmd + D), lalu perkecil skalanya (K = scale tool) supaya muat.
- Satu layar dibuat lebih besar sebagai fokus; sisanya lebih kecil.
- Beri **label kecil** di atas setiap layar (nama layar atau nomor langkah), seperti di placeholder.
- Tambahkan panah putus-putus antar-layar kalau itu satu alur.
- Bayangan tipis (drop shadow, y 12, blur 32, opacity ~12%) membuat layar "terangkat" dari background.
- Hapus data asli klien atau ganti dengan data dummy (nama, nomor, harga).

## 3. Export

- Pilih frame `Portfolio cover` → Export → **PNG, 2x**.
- Konversi ke WebP supaya ringan (target < 300 KB). Bisa minta Claude, atau pakai squoosh.app.
- Simpan sebagai `public/assets/opt/work/<nama-project>.webp`, misalnya `livestock.webp`.

## 4. Pasang di website

Di `content/projects.js`, cari entri project-nya di `archive`, lalu:

```js
image: "/assets/opt/work/livestock.webp",
// hapus baris ini:
imagePlaceholder: true,
```

Badge oranye "Placeholder image" akan hilang begitu `imagePlaceholder` dihapus.

## Opsional: gambar tambahan

Kalau project-nya dijadikan case study, page Figma lain bisa jadi artefak di halaman case study (field `gallery`):
- **User flow**: screenshot page flow-nya (zoom sampai semua langkah terlihat, export 1x atau 2x).
- **Data structure / ERD**: export frame diagramnya.
- **Design system**: satu frame berisi warna, tipografi dan komponen utama.
