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

// TODO: ganti dengan data asli — domain final website (dipakai untuk SEO,
// sitemap, Open Graph, canonical URL).
export const SITE_URL = "https://fadhilmuhammad.dev";

// TODO: ganti dengan data asli — jumlah klien/tim yang pernah kamu layani
// (freelance + kantor). Tampil di section "Numbers" di homepage.
export const clientsServed = { value: 6, suffix: "+", label: "Clients & teams served" };

// TODO: ganti dengan data asli — status ketersediaan & preferensi kerja.
export const availability = {
  open: true,
  label: "Open to IT Consultant, Senior Developer & Analyst roles",
  mode: "Remote · Hybrid · Medan",
};

// TODO: ganti dengan data asli — role/posisi saat ini (Okt 2026). Data
// terakhir yang tercatat: Freelance (Jul 2023 – sekarang).
export const currentRole = "Freelance developer & system designer";

// TODO: ganti dengan data asli — hasil/metric tiap case study. Isi dengan
// angka yang benar-benar bisa kamu pertanggungjawabkan saat interview.
export const caseStudyResults = {
  "dmb-kiosk": [
    { value: "5", label: "outlets running the kiosk" },
    { value: "−30%", label: "average time to place an order" },
    { value: "2", label: "device classes from one codebase (TV + tablet)" },
  ],
  "p3-system": [
    { value: "3→1", label: "spreadsheets merged into one system" },
    { value: "Daily", label: "stock reconciliation, down from monthly" },
    { value: "0", label: "manual re-keying between purchasing & sales" },
  ],
  angkutin: [
    { value: "3", label: "roles served: residents, collectors, admins" },
    { value: "Real-time", label: "report status via Firestore" },
    { value: "120+", label: "pickup reports in pilot" },
  ],
};

// TODO: ganti dengan data asli — detail case study yang belum tercatat.
export const caseStudyMeta = {
  "p3-system": { duration: "4 months", team: "Solo: analyst and developer", year: "2025", status: "Delivered to client" },
  angkutin: { duration: "4 months", team: "Team of 6 (Bangkit capstone)", year: "2023", status: "Pilot" },
  "dmb-kiosk": { team: "Product team of 5" },
};

// TODO: ganti dengan data asli — testimoni (minta 2–3 kalimat via LinkedIn
// dari atasan, klien, atau peserta BEKUP). Jangan pakai kutipan karangan.
export const testimonials = [
  {
    quote:
      "Fadhil sat with our team, drew the process on a whiteboard, and caught edge cases we'd missed. What he shipped matched what we agreed.",
    name: "Client name",
    role: "Operations Lead · Retail client",
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

// TODO: ganti dengan data asli — sertifikasi resmi (nama + penerbit + tahun +
// link verifikasi). Isi di bawah diambil dari kelas yang tercantum di CV,
// tapi nama sertifikat & tahunnya perlu dicek.
export const certifications = [
  { name: "Flutter Developer Expert", issuer: "Dicoding Indonesia", year: "2022", url: "" },
  { name: "Android Developer (Jetpack Compose)", issuer: "Bangkit Academy", year: "2023", url: "" },
  { name: "Back-End Developer (Node.js)", issuer: "Dicoding Indonesia", year: "2022", url: "" },
];
