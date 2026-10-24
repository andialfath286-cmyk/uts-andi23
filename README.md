# Project Website Statis Profil & Sewa Fotografer (Andi Creative Lab)
**UTS Pemrograman Web / Desain Web**

Project ini merupakan website statis modern dan responsif untuk usaha jasa fotografer komersial dan UMKM dengan nama **Andi Creative Lab**, dikembangkan menggunakan **HTML5 murni, CSS3 kustom (Vanilla CSS), dan JavaScript**.

---

## 📁 Struktur Berkas Project

```text
c:\UTS Andi\
├── index.html              # Halaman 1: Profil Usaha Fotografer (Beranda & Profil Lengkap)
├── layanan-harga.html      # Halaman 2: Layanan & Tabel Lengkap Harga Sewa Fotografer UMKM
├── portofolio.html         # Halaman 3: Galeri Portofolio Hasil Karya & Formulir Kontak/Booking
├── logoandi.jpeg           # Foto Profil / Logo Resmi Andi Creative Lab
├── README.md               # Dokumentasi Lengkap Project UTS
├── css/
│   └── style.css           # Lembar Gaya CSS (Palet Dark Navy Luxury, Tipografi, Tabel, Grid)
├── js/
│   └── main.js             # Skrip Navigasi Responsif & Integrasi Booking WhatsApp
├── images/
│   ├── logoandi.jpeg       # Aset Logo Brand Resmi
│   ├── andi_profile.jpg    # Foto Asli Profil Andi (Protokoler & Kedinasan)
│   ├── portrait_candid.jpg # Foto Asli Sesi Candid & Personal Branding
│   └── portrait_formal.jpg # Foto Asli Sesi Formal Organisasi & Komunitas
```

---

## 🎯 Pemenuhan 4 Kriteria Soal / Tugas

| No | Kriteria Soal | Implementasi pada Project | Berkas Terkait |
|:---|:---|:---|:---|
| **1** | **Profil Usaha Fotografer (Teks & Gambar)** | Profil komprehensif pendiri (Andi Saputra, S.Ds.), filosofi kerja, visi & misi, gear profesional (Sony A7IV, GM lenses, Godox Lighting), dipadukan dengan foto asli Andi `images/andi_profile.jpg` dan logo profil `logoandi.jpeg`. | [index.html](file:///c:/UTS%20Andi/index.html) |
| **2** | **Tabel Data Harga Sewa Fotografer pada UMKM** | Tabel data harga sewa lengkap (`<table>`, `<caption>`, `<thead>`, `<tbody>`, `<tfoot>`, `<tr>`, `<th>`, `<td>`) menampilkan 6 paket sewa UMKM & komersial, durasi, jumlah foto, fasilitas alat, dan tarif sewa (Rp 350.000 s/d Rp 2.500.000) serta tabel sewa alat tambahan. | [layanan-harga.html](file:///c:/UTS%20Andi/layanan-harga.html) |
| **3** | **Multi-Halaman dengan Hyperlink `<a>`** | Disediakan 3 halaman yang saling terhubung penuh menggunakan tag anchor `<a href="...">` pada navigation bar, call-to-action buttons, dan footer. | [index.html](file:///c:/UTS%20Andi/index.html), [layanan-harga.html](file:///c:/UTS%20Andi/layanan-harga.html), [portofolio.html](file:///c:/UTS%20Andi/portofolio.html) |
| **4** | **Tag `<div>` & Semantics (`<header>`, `<nav>`, dll) + CSS** | Menggunakan elemen semantik HTML5 standar: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<table>`, form elements, serta kontainer `<div>` berkelas yang di-styling secara rapi melalui `css/style.css`. | [css/style.css](file:///c:/UTS%20Andi/css/style.css) |

---

## 🚀 Cara Menjalankan Website

1. Buka folder `c:\UTS Andi\` pada File Explorer Windows.
2. Klik ganda (double-click) pada berkas `index.html`.
3. Halaman website akan otomatis terbuka pada browser default Anda (Google Chrome, Microsoft Edge, Mozilla Firefox, dll).
4. Klik tautan pada menu navigasi untuk berpindah ke halaman **Layanan & Harga Sewa** atau **Portofolio & Kontak**.

---

## 🎨 Detail Desain & Teknologi
- **Tema Warna**: *Luxury Dark Navy* (`#060a12`, `#0b1324`, `#111d35`) dengan aksen *Cyan & Gold* yang serasi dengan nuansa `logoandi.jpeg`.
- **Tipografi**: Google Fonts *Outfit* (Modern Sans-serif) dan *Playfair Display* (Editorial Serif).
- **Tabel Responsif**: Menyesuaikan tampilan di layar desktop, tablet, dan smartphone dengan *horizontal scrollbar* otomatis tanpa merusak tata letak.
- **Interaktivitas**: Navigasi hamburger mobile, filter kategori galeri foto, dan formulir booking yang langsung meneruskan data ke WhatsApp resmi studio.
