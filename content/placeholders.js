// ============================================================================
//  PLACEHOLDER DATA — semua data dummy ada di file ini, dan HANYA di file ini.
//
//  Setiap nilai di bawah adalah contoh yang realistis, BUKAN fakta. Ganti
//  dengan data asli sebelum website dipublikasikan. Komponen yang menampilkan
//  nilai dari file ini membungkusnya dengan <Ph>, sehingga di `pnpm dev`
//  nilainya diberi garis putus-putus + tooltip "Placeholder". Di build
//  production, penanda itu tidak tampil — jadi jangan deploy sebelum diganti.
//
//  Cara cek sisa placeholder:  grep -rn "TODO: ganti" content/
// ============================================================================

// TODO: ganti dengan data asli — stack website semestaagro.com (belum
// dikonfirmasi; yang tercantum hanya tebakan).
export const caseStudyMeta = {
  "semesta-agro": { stack: ["Next.js", "React", "Tailwind CSS"] },
};

// TODO: ganti dengan data asli — artefak & foto yang belum diunggah. Slot ini
// HANYA tampil di `pnpm dev` (bingkai putus-putus di halaman case study) dan
// tidak muncul di production. Simpan file ke public/assets/opt/work/, lalu
// pindahkan ke field `gallery` di content/projects.js.
export const artefactSlots = {
  "gema-plantation": ["ERD (disamarkan)", "User flow: RKH → BKM → SPB", "Wireframe aplikasi mandor", "Foto di lapangan / saat pelatihan"],
  "gema-factory": ["User flow: scan → issue → work order", "Screenshot aplikasi (disamarkan)", "Brosur produk GEMA Factory"],
  "p3-system": ["ERD", "Diagram proses pembelian–penjualan–stok"],
};

// TODO: ganti dengan data asli — testimoni (minta 2–3 kalimat via LinkedIn
// dari atasan, klien, atau peserta BEKUP). Jangan pakai kutipan karangan.
export const testimonials = [
  {
    quote:
      "Fadhil sat with our team, drew the process on a whiteboard, and caught edge cases we'd missed. What he shipped matched what we agreed.",
    name: "Client name",
    role: "Operations Lead · Plantation client",
  },
  {
    quote:
      "He owned the kiosk app from UI to API integration and kept it stable on very different screens. Easy to hand work to.",
    name: "Colleague name",
    role: "Engineering Lead · Previous employer",
  },
  {
    quote:
      "Patient, structured, and good at explaining the why. Our study group finished stronger because of his peer-programming sessions.",
    name: "Participant name",
    role: "Flutter learner · BEKUP 2025",
  },
];
