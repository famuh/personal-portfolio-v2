// Copy for the CV pages (/cv in English, /cv/id in Indonesian). Facts stay in
// content/experience.js and content/expertise.js; this file holds the CV's own
// wording plus the Indonesian translations, matched by `company|period` (the
// English period, before translation). An entry without a translation falls
// back to the English text, so add one here whenever experience.js changes.

const key = (item) => `${item.company ?? item.institution}|${item.period}`;

// Entries kept on the website but left off the CV (same keys as below).
const hiddenOnCv = new Set(["Universitas Mikroskil|Nov 2023"]);

const MONTHS_ID = { May: "Mei", Aug: "Agu", Oct: "Okt", Dec: "Des", Present: "Sekarang" };
const periodId = (p) => p.replace(/\b(May|Aug|Oct|Dec|Present)\b/g, (m) => MONTHS_ID[m]);

export const cvCopy = {
  en: {
    lang: "en",
    headline: "Software Engineer · System Analyst · IT Consultant",
    location: "Medan, North Sumatra, Indonesia",
    portfolioLabel: "Portfolio and case studies",
    summary:
      "Software engineer and system analyst with 3+ years of turning how a company actually operates into systems its people use every day. I lead the GEMA product line at Green Harvest Solutions, which takes palm oil estates and mills off paper: field work recorded once at the source, maintenance tracked from issue to completion, and data flowing into the client's ERP and management reports. I own the whole cycle, from field studies and requirement analysis to system design, development, deployment, user training and support, working directly with clients and leading a team of developers and implementators. Earlier I delivered hospitality, POS, self-ordering and attendance systems for a multi-outlet business group.",
    sections: {
      summary: "Summary",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      activities: "Leadership & community",
      education: "Education & training",
      certifications: "Certifications & languages",
    },
    waysOfWorking: {
      label: "Ways of working",
      value: "Field studies, requirement gathering, estimation, Agile delivery, code review, user training, client presentations",
    },
    toolbar: { note: "Also available as PDF. Generated from this site's content.", switchLabel: "Bahasa Indonesia", switchHref: "/cv/id" },
    projects: [
      {
        name: "OneTap-SPB",
        context: "Personal project",
        period: "2026",
        highlights: [
          "Desktop app for palm oil mill weighbridges that moves the delivery note from the truck driver's NFC card into the company database in one tap, replacing manual re-typing while trucks queue.",
          "Checks every card before saving, never records the same delivery note twice, and logs who saved or changed each record and when.",
        ],
      },
    ],
  },

  id: {
    lang: "id",
    headline: "Software Engineer · System Analyst · IT Consultant",
    location: "Medan, Sumatera Utara, Indonesia",
    portfolioLabel: "Portofolio dan studi kasus",
    summary:
      "Software engineer dan system analyst dengan pengalaman 3+ tahun menerjemahkan cara kerja perusahaan menjadi sistem yang dipakai penggunanya setiap hari. Memimpin lini produk GEMA di Green Harvest Solutions yang memindahkan operasional kebun dan pabrik kelapa sawit dari kertas ke sistem: pekerjaan lapangan dicatat sekali di sumbernya, maintenance terpantau dari laporan kerusakan sampai selesai, dan data mengalir ke ERP klien serta laporan manajemen. Menangani siklus proyek secara utuh, mulai dari studi lapangan dan analisis kebutuhan, desain sistem, pengembangan, deployment, hingga pelatihan pengguna dan dukungan, bekerja langsung dengan klien sambil memimpin tim developer dan implementator. Sebelumnya membangun sistem hospitality, POS, self-ordering dan absensi untuk grup usaha multi-outlet.",
    sections: {
      summary: "Ringkasan",
      skills: "Keahlian",
      experience: "Pengalaman kerja",
      projects: "Proyek",
      activities: "Kepemimpinan & komunitas",
      education: "Pendidikan & pelatihan",
      certifications: "Sertifikasi & bahasa",
    },
    waysOfWorking: {
      label: "Cara kerja",
      value: "Studi lapangan, pengumpulan kebutuhan, estimasi, Agile delivery, code review, pelatihan pengguna, presentasi ke klien",
    },
    toolbar: { note: "Tersedia juga dalam PDF. Dibuat dari konten situs ini.", switchLabel: "English", switchHref: "/cv" },
    period: periodId,
    projects: [
      {
        name: "OneTap-SPB",
        context: "Proyek pribadi",
        period: "2026",
        highlights: [
          "Aplikasi desktop untuk jembatan timbang pabrik kelapa sawit yang memindahkan data SPB dari kartu NFC supir truk ke database perusahaan dengan sekali tempel, menggantikan pengetikan ulang saat truk antre.",
          "Memeriksa isi setiap kartu sebelum disimpan, mencegah SPB tercatat ganda, dan mencatat siapa yang menyimpan atau mengubah data beserta waktunya.",
        ],
      },
    ],
    domains: {
      "Backend & infra": "Backend & infrastruktur",
      "Integrations & hardware": "Integrasi & hardware",
      "Analysis & design": "Analisis & desain",
    },
    experience: {
      "Green Harvest Solutions · PT Semesta Agri Solusi|Dec 2025 – Present": {
        mode: "Medan · Penuh waktu · Di kantor dan di lokasi klien",
        summary:
          "Software mobile dan web untuk operasional kelapa sawit: lini produk GEMA dan ERP Green Harvest Plantation, dipasang per klien dengan server dan database terpisah.",
        highlights: [
          "Memimpin lini produk GEMA untuk perkebunan dan pabrik bersama tim developer dan implementator: studi lapangan, analisis kebutuhan, estimasi, presentasi ke klien dan delivery.",
          "Mendigitalkan pelaporan lapangan kebun lewat GEMA Plantation: aplikasi lapangan offline-first dan CMS web, sehingga absensi, panen dan perawatan dicatat sekali di lapangan lengkap dengan foto, lokasi dan nomor unik, lalu sampai ke manajemen tanpa diketik ulang.",
          "Menggantikan work order kertas di pabrik kelapa sawit lewat GEMA Factory: mesin dikenali lewat QR code, laporan kerusakan dengan hasil pengukuran yang dicek terhadap batas normal, preventive maintenance, approval dan work order dari open sampai selesai.",
          "Mengintegrasikan kedua produk dengan ERP klien sehingga master data, rencana kerja harian dan purchase order masuk tanpa ekspor manual, serta membangun API eksternal untuk klien dengan ERP berbeda.",
          "Menambahkan deteksi kematangan buah di perangkat untuk mandor lapangan dan asisten AI yang menjawab pertanyaan manajemen seputar produksi, maintenance dan laporan.",
          "Melakukan deployment, monitoring dan troubleshooting server serta database klien di production, dan mendukung modul ERP klien yang sudah berjalan.",
          "Melatih pengguna dan mendukung klien di lokasi maupun online; membangun ulang website perusahaan menjadi situs produk yang dipakai tim sales untuk demo, serta mendesain deck dan brosur produk.",
        ],
      },
      "Samta Cloud|Nov 2025 – May 2026": {
        mode: "Medan · Paruh waktu · Berbasis proyek",
        highlights: [
          "Membangun aplikasi mobile yang mendigitalkan pekerjaan maintenance harian di hotel dan operasional hospitality.",
          "Bertanggung jawab atas UI, integrasi API dan state management, disusun dengan clean architecture agar aplikasi tetap mudah dirawat saat fitur bertambah.",
          "Bekerja sama dengan tim developer menjaga rilis tetap stabil dan sesuai kebutuhan bisnis.",
        ],
      },
      "Freelance|Nov 2023 – Apr 2026": {
        mode: "Remote · Wiraswasta",
        highlights: [
          "Bekerja langsung dengan pemilik usaha untuk menemukan inti masalah dan mewujudkannya menjadi software yang berjalan.",
          "Menganalisis dan membangun sistem pembelian, penjualan dan persediaan untuk usaha ritel dan stok, dari diagram proses, wireframe dan model data sampai pengembangan full-stack.",
          "Menyelesaikan aplikasi absensi mobile untuk perusahaan swasta, dengan validasi lokasi agar data kehadiran akurat.",
          "Merancang sistem manajemen peternakan dan distributor serta marketplace preloved multi-role di Figma, dari arsitektur sistem dan user flow sampai prototipe hi-fi.",
        ],
      },
      "BEKUP × Dicoding Indonesia|Jul 2025 – Nov 2025": {
        mode: "Remote · Paruh waktu",
        summary: "Program startup nasional dari Kementerian Ekonomi Kreatif (Baparekraf for Startup).",
        highlights: [
          "Memfasilitasi sesi online mingguan dan memantau perkembangan peserta dari latar belakang yang beragam.",
          "Meninjau dan memvalidasi jurnal peserta dengan kepatuhan 100% terhadap standar program.",
          "Mendukung 15+ sesi pelatihan bersama instruktur dari awal sampai akhir.",
          "Memperkenalkan peer programming dan pembelajaran kolaboratif untuk memperkuat pemahaman dan kerja tim.",
        ],
      },
      "DMB · PT Damai Nusa Abadi (DNA Group)|Oct 2024 – Sep 2025": {
        mode: "Medan · Hybrid · Penuh waktu",
        summary:
          "Divisi software DNA Group, grup usaha hospitality, hiburan, F&B dan startup di beberapa kota di Indonesia.",
        highlights: [
          "Merancang dan membangun aplikasi self-ordering untuk kiosk dan tablet di outlet F&B milik grup, dari UI/UX sampai integrasi pemesanan dan POS.",
          "Membangun absensi dengan pengenalan wajah dan deteksi fake GPS untuk mencegah titip absen, serta mode offline agar POS tetap berjalan tanpa koneksi.",
          "Menyelesaikan modul untuk sistem hotel, aset, POS, inventori dan manajemen multi-outlet.",
          "Merilis dan memelihara aplikasi grup di Google Play, bekerja sama dengan tim operasional dan bisnis dalam menyusun kebutuhan.",
        ],
      },
      "Sentosa Digital Printing|Aug 2019 – Nov 2019": {
        role: "Desainer Grafis (Magang)",
        mode: "Medan · Praktik kerja lapangan SMK",
        highlights: ["Menangani permintaan desain grafis langsung dengan klien, menyesuaikan dengan berbagai tipe klien dan brief."],
      },
    },
    activities: {
      "Universitas Mikroskil|Nov 2023": {
        role: "Pembawa Acara (MC)",
        highlights: ["Membawakan seminar “Cerdas Emosi Raih Prestasi” untuk peserta mahasiswa."],
      },
      "BITSMIKRO, Informatics Student Association|Sep 2022 – Sep 2023": {
        role: "Ketua",
        company: "BITSMIKRO, Himpunan Mahasiswa Informatika",
        highlights: ["Memimpin dan mengelola himpunan beserta divisi-divisinya selama satu periode kepengurusan."],
      },
      "Universitas Mikroskil|Jan 2023": {
        role: "Asisten Mentor",
        highlights: ["Membantu peserta workshop Flutter menyelesaikan masalah saat sesi praktik."],
      },
      "Kampus Merdeka × Dicoding, Studi Independen|Aug 2022 – Dec 2022": {
        role: "Peer Tutor Kelompok Belajar",
        highlights: ["Mengajar dan membantu sesama peserta menyelesaikan masalah di learning path Flutter dan back-end."],
      },
      "BITSMIKRO, Informatics Student Association|Dec 2021 – Sep 2022": {
        role: "Staf Divisi Media & Informasi",
        company: "BITSMIKRO, Himpunan Mahasiswa Informatika",
        highlights: ["Menyampaikan informasi himpunan melalui media sosial, flyer, thumbnail dan blog organisasi."],
      },
    },
    education: {
      "Universitas Mikroskil|2020 – 2024": {
        detail: "S1 Teknik Informatika",
        note: "IPK 3,91 / 4,00. Proyek skripsi: Angkutin, aplikasi penjemputan sampah",
      },
      "Bangkit Academy (Google, GoTo, Traveloka)|Feb 2023 – Aug 2023": {
        detail: "Angkatan Mobile Development",
        note: "Kotlin, Jetpack Compose, prinsip SOLID dan desain UX, serta capstone bersama tim ML dan cloud",
      },
      "Kampus Merdeka × Dicoding, Studi Independen|Aug 2022 – Dec 2022": {
        detail: "Multi-Platform (Flutter) & Back-End (Node.js)",
        note: "Lulusan Terbaik, dan peer tutor kelompok belajar",
      },
      "SMK Negeri 10 Medan|2017 – 2020": { detail: "Multimedia" },
    },
    languages: { Indonesian: "Bahasa Indonesia (penutur asli)", English: "Bahasa Inggris (kemampuan kerja terbatas)" },
  },
};

// Applies the translations of `lang` to a list from experience.js.
export function localize(list, lang, field) {
  const copy = cvCopy[lang];
  const map = copy[field];
  return list.filter((item) => !hiddenOnCv.has(key(item))).map((item) => {
    const t = map?.[key(item)] ?? {};
    return { ...item, ...t, period: copy.period ? copy.period(item.period) : item.period };
  });
}
