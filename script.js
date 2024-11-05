const materi = [
    {
        judul: "Macam-Macam Software Lengkap Beserta Penjelasannya",
        deskripsi: "Berbagai jenis software dan fungsinya dalam kehidupan sehari-hari.",
        detail: `
            1. Software Sistem: Software yang mengelola perangkat keras dan menyediakan platform untuk aplikasi lain. Contoh: Windows, macOS, Linux.
            2. Software Aplikasi: Perangkat lunak untuk membantu pengguna menjalankan tugas tertentu, seperti Microsoft Office, Adobe Photoshop, VLC Media Player.
            3. Software Utilitas: Digunakan untuk memelihara dan mengoptimalkan sistem, seperti antivirus, CCleaner, dan WinRAR.
            4. Software Pengembangan: Digunakan oleh pengembang untuk menulis dan mengelola kode, contoh: Visual Studio, Eclipse, Git.
            5. Software Basis Data: Digunakan untuk mengelola dan mengorganisir data dalam database, seperti MySQL, Oracle, dan SQL Server.
            6. Software Keamanan: Melindungi perangkat dari ancaman, seperti antivirus dan firewall.
            7. Software Virtualisasi: Menjalankan beberapa sistem operasi pada perangkat keras yang sama, contoh: VMware, VirtualBox.
            8. Software CAD: Digunakan dalam desain dan pembuatan model 2D atau 3D, seperti AutoCAD dan SolidWorks.
            9. Software Media dan Kreativitas**: Membantu dalam pengeditan gambar, video, dan audio, seperti Adobe Premiere Pro, After Effects, dan Audacity.
            10. Software Pendidikan: Mendukung pembelajaran, seperti Duolingo, Khan Academy, dan Moodle.
            11. Software Kolaborasi: Memudahkan kerja tim, seperti Slack, Trello, dan Google Drive.
        `
    },
    {
        judul: "Istilah-istilah Keamanan Komputer",
        deskripsi: "Mengenal berbagai istilah dalam dunia keamanan komputer.",
        detail: `
            1. Malware: Perangkat lunak berbahaya yang dirancang untuk merusak atau mengakses sistem tanpa izin.
            2. Virus: Malware yang dapat mereplikasi dirinya dan menyebar ke file dan program lainnya.
            3. Trojan Horse: Program yang tampaknya berguna tetapi sebenarnya menyembunyikan malware di dalamnya.
            4. Phishing: Teknik untuk menipu pengguna agar memberikan informasi pribadi melalui email atau situs web palsu.
            5. Firewall: Alat yang digunakan untuk memonitor dan mengontrol lalu lintas jaringan masuk dan keluar untuk mencegah akses yang tidak sah.
            6. Encryption: Proses untuk mengamankan data dengan mengubahnya menjadi format yang tidak dapat dibaca tanpa kunci tertentu.
            7. Hacking: Tindakan ilegal untuk mengakses sistem komputer atau data dengan cara yang tidak sah.
            8. Spyware: Program yang mengumpulkan data pengguna tanpa izin, sering kali digunakan untuk tujuan pencurian informasi.
            9. Ransomware: Malware yang mengunci akses ke data pengguna dan meminta tebusan untuk membukanya.
            10. Two-Factor Authentication (2FA): Metode untuk meningkatkan keamanan akun dengan meminta dua verifikasi, seperti password dan kode yang dikirim ke perangkat lain.
        `
    },
    {
        judul: "Hardware Komputer",
        deskripsi: "Mengenal komponen-komponen fisik pada komputer.",
        detail: `
            1. CPU (Central Processing Unit): Otak dari komputer yang bertugas memproses semua perintah dan menjalankan program.
            2. RAM (Random Access Memory): Memori sementara yang digunakan untuk menyimpan data sementara yang dibutuhkan oleh CPU.
            3. Hard Disk Drive (HDD) / Solid State Drive (SSD): Media penyimpanan utama yang digunakan untuk menyimpan data secara permanen.
            4. Motherboard: Papan sirkuit utama yang menghubungkan semua komponen komputer.
            5. Power Supply Unit (PSU): Menyediakan daya untuk seluruh komponen komputer.
            6. GPU (Graphics Processing Unit): Komponen yang bertanggung jawab untuk memproses grafis dan gambar, penting untuk gaming atau aplikasi desain grafis.
            7. Input Devices: Perangkat yang digunakan untuk memasukkan data ke komputer, seperti keyboard, mouse, dan scanner.
            8. Output Devices: Perangkat yang digunakan untuk menampilkan hasil data dari komputer, seperti monitor, printer, dan speaker.
            9. Optical Drive: Perangkat untuk membaca atau menulis data ke media optik seperti CD atau DVD.
            10. Cooling System: Sistem pendingin yang membantu menjaga suhu komponen komputer agar tetap stabil dan mencegah overheating.
        `
    },
    {
        judul: "Istilah Jaringan Komputer",
        deskripsi: "Mengenal istilah-istilah dasar dalam dunia jaringan komputer.",
        detail: `
            1. IP Address: Alamat unik yang diberikan pada setiap perangkat yang terhubung ke jaringan untuk komunikasi.
            2. Router: Perangkat yang mengarahkan lalu lintas data antara perangkat di jaringan lokal dan internet.
            3. Switch: Perangkat yang menghubungkan perangkat dalam jaringan lokal dan mengatur aliran data antar perangkat.
            4. LAN (Local Area Network): Jaringan komputer yang terbatas pada area geografis yang kecil, seperti rumah atau kantor.
            5. WAN (Wide Area Network): Jaringan komputer yang mencakup area yang lebih luas, seperti jaringan antar kota atau negara.
            6. Wi-Fi: Teknologi jaringan nirkabel yang memungkinkan perangkat terhubung ke internet tanpa kabel.
            7. Ethernet: Teknologi kabel untuk menghubungkan perangkat dalam jaringan lokal (LAN).
            8. DNS (Domain Name System)**: Sistem yang mengonversi nama domain (seperti www.google.com) menjadi alamat IP.
            9. Firewall (Jaringan): Sistem yang mengawasi dan mengontrol lalu lintas data masuk dan keluar dalam jaringan untuk mencegah ancaman.
            10. VPN (Virtual Private Network): Jaringan yang memungkinkan pengguna untuk terhubung ke internet secara aman dan terlindungi dengan mengenkripsi koneksi.
        `
    },
    // Tambahkan materi lainnya jika diperlukan
];

// Fungsi untuk menampilkan daftar materi
function displayMateri() {
    const materiList = document.getElementById("materi-list");
    materi.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "col-sm-12 col-md-6 col-lg-4 d-flex";
        card.innerHTML = `
            <div class="card flex-fill">
                <div class="card-body">
                    <h5 class="card-title">${item.judul}</h5>
                    <p class="card-text">${item.deskripsi}</p>
                    <button class="btn btn-primary" onclick="showDetail(${index})">Lihat Detail</button>
                </div>
            </div>
        `;
        materiList.appendChild(card);
    });
}

// Fungsi untuk menampilkan detail materi di modal
function showDetail(index) {
    const materiDetail = document.getElementById("materiDetail");
    const selectedMateri = materi[index];
    materiDetail.innerHTML = `
        <h5>${selectedMateri.judul}</h5>
        <p>${selectedMateri.detail}</p>
    `;
    $('#materiModal').modal('show');
}

// Panggil fungsi untuk menampilkan daftar materi saat halaman dimuat
window.onload = displayMateri;
