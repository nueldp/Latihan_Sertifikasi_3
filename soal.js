// Database Soal Sertifikasi Rai Fitness 2026
const questions = [
    {
        n: 1,
        q: "Dalam definisi sehat Rai Fitness, manakah yang TIDAK termasuk dalam 5 'pemegang saham' fisik tubuh?",
        options: [
            { text: "Cairan & Organ", correct: false, reason: "Cairan dan Organ adalah komponen fisik utama." },
            { text: "Tulang & Otot", correct: false, reason: "Tulang dan Otot adalah penyusun Bobot Murni." },
            { text: "Pikiran/Mental", correct: true, reason: "5 pemegang saham fisik adalah: Cairan, Organ, Tulang, Otot, dan Lemak." },
            { text: "Lemak", correct: false, reason: "Lemak adalah salah satu komponen komposisi tubuh." }
        ],
        hint: "Fokus pada apa yang bisa diukur oleh alat Bioelectrical Impedance Analysis (BIA)."
    },
    {
        n: 2,
        q: "Mengapa latihan beban memberikan 'Metabolic Advantage' dibandingkan hanya kardio?",
        options: [
            { text: "Membakar lemak saat latihan saja", correct: false, reason: "Kardio juga membakar lemak saat latihan." },
            { text: "Meningkatkan massa otot yang memperbesar BMR & EPOC", correct: true, reason: "Otot adalah jaringan aktif yang membakar energi bahkan saat istirahat." },
            { text: "Mengubah sel lemak menjadi otot", correct: false, reason: "Sel lemak dan otot adalah dua jaringan yang berbeda." },
            { text: "Menurunkan kebutuhan protein", correct: false, reason: "Latihan beban justru meningkatkan kebutuhan protein." }
        ],
        hint: "Pikirkan tentang mesin pembakar bensin (otot) yang lebih besar."
    },
    {
        n: 3,
        q: "Manakah skenario hasil fitness yang dianggap 'Maksimalis' (Skenario 7)?",
        options: [
            { text: "Lemak turun, Otot turun", correct: false, reason: "Ini merugikan metabolisme jangka panjang." },
            { text: "Lemak tetap, Otot naik", correct: false, reason: "Ini bagus, tapi bukan hasil fat loss maksimal." },
            { text: "Lemak turun, Otot naik", correct: true, reason: "Kondisi ideal: membuang penyakit (lemak) dan memperkuat mesin (otot)." },
            { text: "Lemak naik, Otot naik", correct: false, reason: "Ini biasanya terjadi pada fase bulking yang tidak terkontrol." }
        ],
        hint: "Cari progres di kedua sisi: lemak berkurang, otot bertambah."
    },
    {
        n: 4,
        q: "Klien berat 100kg dengan Body Fat 30%. Berapakah Bobot Murni (LBM)-nya?",
        options: [
            { text: "30 kg", correct: false, reason: "30 kg adalah berat lemaknya." },
            { text: "60 kg", correct: false, reason: "Salah perhitungan." },
            { text: "70 kg", correct: true, reason: "LBM = 100kg - (30% dari 100kg) = 70kg." },
            { text: "80 kg", correct: false, reason: "Salah perhitungan." }
        ],
        hint: "Berat Total dikurangi Berat Lemak (dlm kg)."
    },
    {
        n: 5,
        q: "Berapakah BMR Pak Budi jika LBM-nya adalah 70kg? (Metode Rai Fitness)",
        options: [
            { text: "1400 kkal", correct: false, reason: "Salah konstanta." },
            { text: "1540 kkal", correct: true, reason: "Rumus: LBM (70) x 22 = 1540 kkal." },
            { text: "1680 kkal", correct: false, reason: "Salah perhitungan." },
            { text: "2200 kkal", correct: false, reason: "Ini jika menggunakan BB total, bukan LBM." }
        ],
        hint: "Gunakan angka '22' sebagai pengali LBM."
    },
    {
        n: 6,
        q: "Berapakah nilai TEF (Thermic Effect of Food) jika BMR klien 1540 kkal?",
        options: [
            { text: "154 kkal", correct: false, reason: "Ini hanya 10%." },
            { text: "308 kkal", correct: true, reason: "TEF = 20% x BMR. 1540 x 0.2 = 308 kkal." },
            { text: "400 kkal", correct: false, reason: "Salah perhitungan." },
            { text: "0 kkal", correct: false, reason: "TEF tidak boleh diabaikan dalam metabolisme." }
        ],
        hint: "Rai Fitness menyarankan 20% karena diet tinggi protein memiliki TEF lebih tinggi."
    },
    {
        n: 7,
        q: "Estimasi EAT (Exercise Activity) yang aman untuk 1 jam latihan beban intensitas moderat adalah...",
        options: [
            { text: "100 kkal", correct: false, reason: "Terlalu rendah." },
            { text: "300 kkal", correct: true, reason: "Baseline aman (konservatif) adalah 300 kkal per jam." },
            { text: "600 kkal", correct: false, reason: "Ini batas atas, berisiko overestimasi bagi pemula." },
            { text: "1000 kkal", correct: false, reason: "Sangat jarang tercapai dalam latihan beban biasa." }
        ],
        hint: "Pilih angka terendah dari rentang standar 300-600."
    },
    {
        n: 8,
        q: "Berapakah NEAT (Non-Exercise Activity) jika BMR klien 1540 kkal?",
        options: [
            { text: "231 kkal", correct: true, reason: "NEAT = 15% x BMR. 1540 x 0.15 = 231 kkal." },
            { text: "154 kkal", correct: false, reason: "Salah persentase." },
            { text: "308 kkal", correct: false, reason: "Ini adalah persentase TEF (20%)." },
            { text: "500 kkal", correct: false, reason: "Tidak berdasarkan rumus." }
        ],
        hint: "Gunakan 15% dari BMR untuk aktivitas harian non-olahraga."
    },
    {
        n: 9,
        q: "Defisit kalori harian yang disarankan agar fat loss aman dan otot terjaga adalah...",
        options: [
            { text: "-1000 kkal", correct: false, reason: "Terlalu ekstrem." },
            { text: "-300 kkal", correct: true, reason: "Defisit moderat ±300 kkal menjaga tubuh tetap bertenaga." },
            { text: "+300 kkal", correct: false, reason: "Ini adalah surplus (menambah berat)." },
            { text: "0 kkal", correct: false, reason: "Ini adalah maintenance." }
        ],
        hint: "Defisit moderat adalah kunci keberlanjutan diet."
    },
    {
        n: 10,
        q: "Mengapa karbohidrat olahan (gula/tepung) buruk untuk fat loss secara hormonal?",
        options: [
            { text: "Sangat tinggi kalori", correct: false, reason: "Kalori karbo sama dengan protein (4 kkal/gr)." },
            { text: "Memicu lonjakan insulin yang mengunci pembakaran lemak", correct: true, reason: "Insulin tinggi menghentikan proses lipolisis (pembakaran lemak)." },
            { text: "Membuat perut kembung", correct: false, reason: "Bukan alasan utama kegagalan fat loss." },
            { text: "Menurunkan massa otot secara langsung", correct: false, reason: "Kurangnya protein yang menyebabkan ini." }
        ],
        hint: "Insulin disebut sebagai hormon penyimpan (storage hormone)."
    },
    {
        n: 11,
        q: "Urutan latihan yang benar untuk mengoptimalkan pembakaran lemak adalah...",
        options: [
            { text: "Kardio dulu baru Beban", correct: false, reason: "Gula darah akan dipakai kardio, beban jadi tidak bertenaga." },
            { text: "Beban dulu baru Kardio", correct: true, reason: "Beban menguras glikogen, kardio setelahnya langsung akses lemak." },
            { text: "Hanya Kardio saja", correct: false, reason: "Tidak membangun mesin metabolisme (otot)." },
            { text: "Bebas saja", correct: false, reason: "Urutan memengaruhi substrat energi yang dibakar." }
        ],
        hint: "Habiskan gula dulu, baru bakar lemak."
    },
    {
        n: 12,
        q: "Rest interval (istirahat) antar set di bawah 90 detik bertujuan untuk...",
        options: [
            { text: "Meningkatkan kekuatan maksimal", correct: false, reason: "Kekuatan maksimal butuh istirahat lebih lama (3-5 menit)." },
            { text: "Memicu stres metabolik & Growth Hormone", correct: true, reason: "Istirahat pendek menjaga intensitas dan respon hormonal untuk hipertrofi." },
            { text: "Menghemat waktu di gym", correct: false, reason: "Bukan alasan sains utama." },
            { text: "Menurunkan detak jantung", correct: false, reason: "Justru menjaga detak jantung tetap tinggi." }
        ],
        hint: "Fokus pada akumulasi metabolit di otot (pump)."
    },
    {
        n: 13,
        q: "Manakah otot yang BUKAN merupakan bagian dari Rotator Cuff (SITS)?",
        options: [
            { text: "Supraspinatus", correct: false, reason: "Bagian dari SITS." },
            { text: "Teres Major", correct: true, reason: "Rotator cuff adalah Teres MINOR, bukan MAJOR." },
            { text: "Infraspinatus", correct: false, reason: "Bagian dari SITS." },
            { text: "Subscapularis", correct: false, reason: "Bagian dari SITS." }
        ],
        hint: "Ingat akronim SITS: S-I-T(Minor)-S."
    },
    {
        n: 14,
        q: "Apa risiko jika lutut dipaksa TIDAK melewati ujung kaki saat squat dalam?",
        options: [
            { text: "Lutut jadi sangat kuat", correct: false, reason: "Salah." },
            { text: "Torsi di pinggang (lower back) naik drastis", correct: true, reason: "Beban berpindah dari lutut ke pinggang secara berlebihan." },
            { text: "Otot paha depan bekerja lebih keras", correct: false, reason: "Justru kerjanya berkurang karena beban pindah ke belakang." },
            { text: "Squat jadi lebih stabil", correct: false, reason: "Justru membuat tubuh cenderung jatuh ke belakang." }
        ],
        hint: "Beban tidak hilang, tapi berpindah ke sendi di atasnya (pinggang)."
    },
    {
        n: 15,
        q: "Mekanisme utama Intermittent Fasting dalam memperbaiki kesehatan adalah...",
        options: [
            { text: "Mengecilkan lambung", correct: false, reason: "Lambung bersifat elastis." },
            { text: "Memberi waktu insulin turun agar sel sensitif kembali", correct: true, reason: "Jendela puasa menurunkan resistensi insulin." },
            { text: "Memaksa tubuh membakar otot", correct: false, reason: "Jika protein cukup, IF justru menjaga otot via GH." },
            { text: "Menghilangkan racun lewat keringat", correct: false, reason: "Detoksifikasi utama dilakukan hati dan ginjal." }
        ],
        hint: "Fokus pada hormon pengatur gula darah."
    },
    {
        n: 16,
        q: "Adaptasi saraf (neural adaptation) biasanya terjadi pada fase...",
        options: [
            { text: "Awal latihan (1-4 minggu)", correct: true, reason: "Kekuatan meningkat di awal karena koordinasi saraf, bukan ukuran otot." },
            { text: "Setelah 1 tahun latihan", correct: false, reason: "Setelah 1 tahun biasanya sudah adaptasi struktural (hipertrofi)." },
            { text: "Hanya saat tidur", correct: false, reason: "Salah." },
            { text: "Saat berhenti latihan", correct: false, reason: "Ini disebut de-adaptasi." }
        ],
        hint: "Mengapa pemula cepat kuat padahal ototnya belum membesar?"
    },
    {
        n: 17,
        q: "Konsep 'Squaring the Curve' dalam Health Span berarti...",
        options: [
            { text: "Hidup selama mungkin meski sakit", correct: false, reason: "Itu hanya life span, bukan health span." },
            { text: "Menjaga kualitas hidup tetap tinggi hingga akhir hayat", correct: true, reason: "Meminimalkan masa sakit (morbidity) di akhir usia." },
            { text: "Memiliki tubuh berbentuk kotak", correct: false, reason: "Istilah metafora, bukan fisik." },
            { text: "Latihan beban setiap hari tanpa henti", correct: false, reason: "Istirahat tetap diperlukan." }
        ],
        hint: "Kualitas hidup vs Kuantitas umur."
    },
    {
        n: 18,
        q: "Repetisi 6-12 dalam latihan beban paling optimal untuk...",
        options: [
            { text: "Kekuatan maksimal (Power)", correct: false, reason: "Power di 1-5 repetisi." },
            { text: "Hipertrofi (Ukuran Otot)", correct: true, reason: "Zona tengah yang menyeimbangkan tegangan dan volume." },
            { text: "Daya tahan (Endurance)", correct: false, reason: "Endurance di 15+ repetisi." },
            { text: "Kesehatan jantung saja", correct: false, reason: "Latihan beban memengaruhi otot lebih utama." }
        ],
        hint: "Zona 'Bodybuilding' klasik."
    },
    {
        n: 19,
        q: "Kekurangan BMI (Body Mass Index) adalah...",
        options: [
            { text: "Sulit dihitung", correct: false, reason: "Sangat mudah dihitung (BB/TB^2)." },
            { text: "Tidak membedakan massa otot dan massa lemak", correct: true, reason: "Atlet berotot sering dicap 'obesitas' oleh BMI." },
            { text: "Hanya untuk orang Eropa", correct: false, reason: "Berlaku global dengan penyesuaian Asia." },
            { text: "Membutuhkan alat mahal", correct: false, reason: "Hanya butuh timbangan dan meteran." }
        ],
        hint: "Pikirkan binaragawan dengan berat 100kg tapi perut sixpack."
    },
    {
        n: 20,
        q: "Fungsi protein yang paling krusial bagi lansia adalah mencegah...",
        options: [
            { text: "Diabetes", correct: false, reason: "Karbohidrat lebih berperan di sini." },
            { text: "Sarcopenia (Penyusutan Otot)", correct: true, reason: "Lansia butuh protein tinggi untuk melawan degradasi otot alami." },
            { text: "Rabun jauh", correct: false, reason: "Tidak relevan." },
            { text: "Gigi berlubang", correct: false, reason: "Tidak relevan." }
        ],
        hint: "Kondisi otot yang 'kempes' pada orang tua."
    }
];
