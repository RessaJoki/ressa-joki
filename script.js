/*
  RESSA JOKI
  Ganti nomor WhatsApp di bawah dengan nomor admin.
  Format: kode negara tanpa +, spasi, atau tanda baca.
  Contoh Indonesia: 6281234567890
*/
const WHATSAPP_NUMBER = "6288224803141";

const priceData = [
  {
    name: "Mondstadt",
    subtitle: "Explore Mondstadt",
    groups: [
      {title:"Explore", rows:[
        ["Starfell Valley","50K"],["Windcry Hill","35K"],["Brightcrown Mountain","40K"],["Windwail Highland","35K"]
      ]},
      {title:"Paket", packages:[["Semua","150K"],["Quest Dragonspine","30K"],["Dragonspine","70K"],["Mondstadt + Dragonspine","210K"],["Explore + Quest Dragonspine","240K"]]}
    ]
  },
  {
    name:"Liyue", subtitle:"Explore Liyue",
    groups:[
      {title:"Quest Prasyarat",rows:[["Chi dari masa lampau","15K"],["Harta hilang harta ditemukan","15K"],["Pohon yang berdiri sendiri","5K"]]},
      {title:"Explore",rows:[["Minlin","70K"],["Bishui Plain","60K"],["Qiongji Estuary","50K"],["Lisha","40K"],["Sea of Clouds","40K"]]},
      {title:"Paket",packages:[["Explore Full","250K"]]}
    ]
  },
  {
    name:"Chasm", subtitle:"Explore The Chasm",
    groups:[
      {title:"Quest Prasyarat",rows:[["Jurnal Penjelajah Chasm","50K"],["Quest Archon Chapter II: Bag. IV","30K"]]},
      {title:"Explore",rows:[["Chasm Atas","40K"],["Chasm Underground","70K"]]},
      {title:"Paket",packages:[["Explore","100K"],["Explore + Quest","180K"]]}
    ]
  },
  {
    name:"Chenyu Vale", subtitle:"Explore Chenyu Vale",
    groups:[
      {title:"Quest Prasyarat",rows:[["Berkah Chenyu dari Giok Karam","50K"],["Sepanjang Wangshan Kenangan","20K"]]},
      {title:"Explore",rows:[["Chenyu Vale: Upper Vale","75K"],["Chenyu Vale: Southern Mountain","75K"],["Mt. Laixin","15K"]]},
      {title:"Paket",packages:[["Explore","150K"],["Explore + Quest","220K"]]}
    ]
  },
  {
    name:"Inazuma", subtitle:"Explore Inazuma",
    groups:[
      {title:"Quest Prasyarat",rows:[["Ritual Pemurnian Sacred Sakura","50K"],["Kisah Tatara","15K"],["Warisan Orobas​hi","30K"],["Pemburu Badai Seirai","25K"],["Harta Karun Seirai","5K"],["Dasar Pemandian Bulan","20K"],["Perjalanan Melalui Kabut","60K"]]},
      {title:"Explore",rows:[["Narukami Island","70K"],["Kannazuka","70K"],["Yashiori Island","70K"],["Watatsumi Island","70K"],["Seirai Island","70K"],["Tsurumi Island","80K"]]},
      {title:"Paket",packages:[["Full Quest","205K"],["Full Explore","430K"],["Quest + Explore","620K"]]}
    ]
  },
  {
    name:"Enkanomiya", subtitle:"Explore Enkanomiya",
    groups:[
      {title:"Quest Prasyarat",rows:[["Quest Buka Map Enkanomiya","—"],["Dasar Pemandian Bulan","20K"],["Aliran Air Yang Tenang","20K"],["Dari Senja Hingga Fajar Di Byakuyakokoku","30K"]]},
      {title:"Quest Prasyarat Explore",rows:[["Koleksi Naga Dan Ular","30K"],["Rahasia Erebos","15K"],["Pemakan Lotus","10K"],["Nyanyian Duka Hyperion","15K"]]},
      {title:"Paket",packages:[["Explore Enkanomiya","80K"],["Quest + Explore","200K"]]}
    ]
  },
  {
    name:"Sumeru Forest", subtitle:"Explore Sumeru Forest",
    groups:[
      {title:"Quest Prasyarat",rows:[["Aranyaka + 76 Aranara","250K"]]},
      {title:"Explore",rows:[["Ashavan Realm","80K"],["Vissudha Field","50K"],["Ardravi Valley","70K"],["Vanarana","30K"],["Lokapala Jungle","60K"],["Lost Nursery","20K"],["Avidya Forest","50K"]]},
      {title:"Paket",packages:[["Full Quest Forest","250K"],["Full Explore Forest","360K"],["Quest + Explore","600K"]]}
    ]
  },
  {
    name:"Sumeru Desert", subtitle:"Explore Sumeru Desert",
    groups:[
      {title:"Quest Prasyarat",rows:[["Mimpi emas","20K"],["Bukit ganda","30K"],["Dilema grafu","15K"],["Lagu berkabung bilqis","60K"],["Tadla si elang pemburu","15K"],["Kiamat yang telah berlalu","15K"],["Khavarenna baik dan buruk","80K"]]},
      {title:"Explore",rows:[["Land of Lower Setekh","70K"],["Land of Upper Setekh","60K"],["Hypostyle Desert","80K"],["Desert of Hadramaveth","100K"],["Gavireh Lajavard","70K"],["Realm of Farakhkert","70K"]]},
      {title:"Paket",packages:[["Full Quest Desert","285K"],["Full Explore Desert","450K"],["Quest + Explore Desert","700K"]]}
    ]
  },
  {
    name:"Fontaine", subtitle:"Explore Fontaine",
    groups:[
      {title:"Quest Prasyarat — Bagian 1",rows:[["Petualangan Narzissenkreuz","70K"],["Warna-Warna Kuno","60K"],["Jejak pasang laut","30K"],["Kitab Kebenaran Samudra","20K"]]},
      {title:"Quest Prasyarat — Bagian 2",rows:[["Komedi Yang Belum Selesai","80K"],["Institut Penelitian Fontaine","40K"],["Menuju Keganjilan","20K"],["Cahaya Penghiantan Dasar Laut","15K"]]},
      {title:"Quest Prasyarat — Bagian 3",rows:[["Bagian (Morte & Liffey Region) Peri Dari Erinnyes","30K"],["Jejak Narcissus","70K"],["Bagian (Nostoi & Sea of Bygone): Tahanan Dalam Belenggu","50K"]]},
      {title:"Explore",rows:[["Beryl Region","70K"],["Belleau Region","40K"],["Court of Fontaine Region","70K"],["Liffey Region","70K"],["Erinnyes Forest","70K"],["Morte Region","70K"],["Nostoi Region","40K"],["Sea of Bygone Era","70K"]]},
      {title:"Paket",packages:[["Total Quest","450K"],["Full Explore","550K"],["Quest + Explore","1JT"]]}
    ]
  },
  {
    name:"Natlan 5.0", subtitle:"Natlan Map 5.0",
    groups:[
      {title:"Quest Prasyarat",rows:[["Antara janji dan lupa","35K"],["Bayangan gunung","40K"],["Kisah mencari mimpi di tengah api","35K"],["Memancing masalah","10K"],["Kembalikan malam pada sang malam","10K"]]},
      {title:"Explore",rows:[["Tequemecan Valley","60K"],["Coatepec Mountain","60K"],["Basin of Unnumbered Flames","60K"],["Toyac Springs","60K"]]},
      {title:"Paket",packages:[["Full Quest","120K"],["Full Explore","200K"],["Quest + Explore","300K"]]}
    ]
  },
  {
    name:"Natlan 5.2", subtitle:"Natlan Map 5.2",
    groups:[
      {title:"Quest Prasyarat",rows:[["Kota yang terkubur oleh abu","50K"],["Misteri bulu mengapung di tepi pantai","15K"],["Buka jantungmu untuk ku","15K"]]},
      {title:"Explore",rows:[["Tezcatepetonco Range","60K"],["Quahuacan Cliff","40K"],["Ochkanatlan","70K"]]},
      {title:"Paket",packages:[["Full Quest","70K"],["Full Explore","150K"],["Quest + Explore","200K"]]}
    ]
  },
  {
    name:"Natlan 5.5", subtitle:"Natlan Map 5.5",
    groups:[
      {title:"Quest Prasyarat",rows:[["Jalan menuju puncak berkobar","10K"],["Penyair kota yang hancur","50K"],["Akhir dari kembalinya bara api","10K"]]},
      {title:"Explore",rows:[["Atocpan","75K"],["Ancient Sacred Mountain","75K"]]},
      {title:"Paket",packages:[["Quest + Explore","220K"]]}
    ]
  },
  {
    name:"Nodkrai 6.0", subtitle:"Husi Island • Lempo Isle • Paha Isle",
    groups:[
      {title:"Husi Island",rows:[["Kisah Gerbang Batu","5K"],["Cermin, Labirin, dan Sang Tsar","10K"],["Demi Sebuah Pulau yang Hijau","10K"],["Hadiah Fatamorgana","5K"],["Gema Masa Lalu yang Tak Terselesaikan","10K"]]},
      {title:"Lempo Isle",rows:[["Kecemasan Pergantian Karir","10K"],["Teman Lembah Moley","10K"],["Tim Teliti, atau Tim Intuisi?","15K"],["Hati Pemberita Rahasia","20K"],["Bisikan di Bawah Ombak","10K"],["Warna Kekosongan","10K"],["Kekuatan Penelitian","10K"]]},
      {title:"Paha Isle",rows:[["Anak Tukang Sepatu, Tapi Tidak Pakai Sepatu","20K"],["Janji Terbang ke Langit","10K"],["Prioritas Utama","10K"]]},
      {title:"Paket",packages:[["Explore Husi","50K"],["Quest + Explore Husi","80K"],["Explore Lempo","80K"],["Quest + Explore Lempo","150K"],["Explore Paha","50K"],["Quest + Explore Paha","80K"],["ALL NODKRAI 6.0","300K"]]}
    ]
  },
  {
    name:"Nodkrai 6.3", subtitle:"Quest & Explore Nodkrai",
    groups:[
      {title:"Quest",rows:[["Gelombang Tiupan Angin","5K"],["Menara Terbalik","15K"],["Saat Lagu Perang Dimekakan","15K"],["Malam Terakhir, Cahaya Pertama","10K"],["Gema Lagu Yang Diasingkan","10K"],["Silsilah Gagak","10K"],["Kembali ke Tangan Pemilik Sebenarnya","15K"],["Menghukum Pendosa Dengan Dosa","10K"],["Dengungan Roh Para Pahlawan","5K"]]},
      {title:"Explore",rows:[["Voidsea Outlook","60K"],["Wavechaser Plain","60K"],["Ashveil Peak","60K"]]},
      {title:"Paket",packages:[["Quest Total","95K"],["Eksplore Total","180K"],["Full Eksplore + Quest","275K"],["DISKON","250K"]]}
    ]
  },
  {
    name:"Easybreeze Holiday Resort", subtitle:"Quest & Explore",
    groups:[
      {title:"Quest Prasyarat (wajib)",rows:[["Menuju Liburan yang Menyenangkan!","10K"],["Tantang tebing warna (bag 1)","10K"],["Tantang tebing guitzli (bag 2)","15K"],["Tantang teluk gelombang (bag 3)","10K"],["Dunia adalah Kanvasmu (bag 4)","10K"],["Jejak Chroma: Bersinarlah Pipilpan Idol","5K"],["Paititi Mimpi Indah","5K"]]},
      {title:"Quest Dunia",rows:[["Kejutan yang Menanti Kita Semua!","20K"],["Penutupan Malam Musim Panas yang Penuh Warna!","10K"],["Penyintas Terakhir dari Temochzitoc (dapat 5 chest)","25K"],["Pertemuan Selalu Terjadi di Waktu Senggang","5K"],["Perburuan Berlanjut pada Perjumpaan","5K"]]},
      {title:"Paket",packages:[["Semua Quest","130K"],["Quest Prasyarat Wajib","70K"],["Eksplore","150K"],["Quest Prasyarat + Eksplore","200K"],["Semua Quest + Eksplore","270K"]]}
    ]
  },
  {
    name:"Frost Moon", subtitle:"Joki Frost Moon",
    groups:[
      {title:"Paket",packages:[["Quest Frost Moon","70K"],["Explore Frost Moon","150K"],["Quest + Explore","200K"],["Harga spesial 10 orang pertama","180K"]]}
    ]
  },
  {
    name:"Snezhnaya 7.0", subtitle:"Explore & Quest Prasyarat",
    groups:[
      {title:"Explore",rows:[["Volkodlak Tundra","70K"],["Flamefeather Valley","50K"],["Fellfrost Peak","80K"],["Everfrozen Earth","80K"],["White Birch Snowgrave","60K"]]},
      {title:"Quest Prasyarat — Flamefeather Valley",rows:[["Di kediaman Kehidupan","30K"]]},
      {title:"Quest Prasyarat — Fellfrost Peak",rows:[["Hesperides di Antara Cinta dan Benci","25K"],["Jack Frost Kecil, Masalah Besar","In Explore"],["Demi Pecahan Cermin Es","In Explore"],["Dalam Ketenangan Siklus","In Explore"]]},
      {title:"Quest Prasyarat — Everfrozen Earth",rows:[["Pertikaian Tanpa Kehormatan dan Kemanusiaan","20K"],["Lagu lembut yang Dia Nyanyikan","In Explore"],["Pedang Salju Berhutang","In Explore"]]},
      {title:"Quest Prasyarat — White Birch Snowgrave",rows:[["Di Satu Sisi Istana, di Sisi Lain Makam","25K"],["Istananya Runtuh Diterpa Badai Salju","10K"]]},
      {title:"Paket",packages:[["Quest + Explore","450K"]]}
    ]
  }
];

function esc(value){
  return String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
}

function renderPrices(filter=""){
  const list = document.getElementById("priceList");
  const q = filter.trim().toLowerCase();
  const filtered = priceData.filter(region => {
    const haystack = JSON.stringify(region).toLowerCase();
    return haystack.includes(q);
  });

  if(!filtered.length){
    list.innerHTML = '<div class="price-empty">Tidak menemukan harga yang cocok.</div>';
    return;
  }

  list.innerHTML = filtered.map((region, index) => `
    <article class="price-card ${q && index === 0 ? 'open' : ''}">
      <div class="price-summary" role="button" tabindex="0" aria-expanded="${q && index === 0 ? 'true':'false'}">
        <div>
          <h3>${esc(region.name)}</h3>
          <small>${esc(region.subtitle)}</small>
        </div>
        <span class="arrow">⌄</span>
      </div>
      <div class="price-body">
        <div class="price-groups">
          ${region.groups.map(group => `
            <div class="price-group">
              <h4>${esc(group.title)}</h4>
              ${(group.rows || []).map(row => `
                <div class="price-row">
                  <span>${esc(row[0])}</span>
                  <strong class="${row[1] === 'In Explore' || row[1] === '—' ? 'muted':''}">${esc(row[1])}</strong>
                </div>`).join("")}
              ${(group.packages || []).length ? `
                <div class="package-grid">
                  ${group.packages.map(p => `<div class="package">${esc(p[0])}: <strong>${esc(p[1])}</strong></div>`).join("")}
                </div>` : ""}
            </div>
          `).join("")}
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll(".price-summary").forEach(summary => {
    const toggle = () => {
      const card = summary.parentElement;
      const isOpen = card.classList.toggle("open");
      summary.setAttribute("aria-expanded", String(isOpen));
    };
    summary.addEventListener("click", toggle);
    summary.addEventListener("keydown", e => {
      if(e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });
  });
}

function buildWhatsApp(message = "Halo Ressa Joki, saya ingin order joki explore Genshin Impact."){
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

function setWhatsAppLinks(){
  const main = document.getElementById("whatsappMain");
  if(main) main.href = buildWhatsApp();
  document.querySelectorAll("[data-wa]").forEach(a => a.href = buildWhatsApp(a.dataset.wa));
}

function closeIntro(){
  const intro = document.getElementById("introScreen");
  if(!intro || intro.classList.contains("hide")) return;
  intro.classList.add("hide");
  document.body.classList.remove("intro-active");
  setTimeout(() => intro.remove(), 850);
}

document.addEventListener("DOMContentLoaded", () => {
  const intro = document.getElementById("introScreen");
  const enter = document.getElementById("introEnter");
  if(enter) enter.addEventListener("click", closeIntro);
  window.setTimeout(closeIntro, 2600);

  renderPrices();
  setWhatsAppLinks();
  document.getElementById("year").textContent = new Date().getFullYear();

  const nav = document.getElementById("navbar");
  const menu = document.getElementById("navMenu");
  document.getElementById("menuToggle").addEventListener("click", () => menu.classList.toggle("open"));
  menu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => menu.classList.remove("open")));
  window.addEventListener("scroll", () => nav.classList.toggle("scrolled", window.scrollY > 20), {passive:true});

  document.getElementById("priceSearch").addEventListener("input", e => renderPrices(e.target.value));

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, {threshold:.08});
  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  // Jika nomor WhatsApp belum diganti, beri pengingat saat tombol order diklik.
  document.getElementById("whatsappMain").addEventListener("click", e => {
    if(!WHATSAPP_NUMBER || WHATSAPP_NUMBER === "6281234567890"){
      e.preventDefault();
      showToast("Ganti WHATSAPP_NUMBER di script.js dengan nomor admin Ressa Joki.");
    }
  });
});

function showToast(text){
  const toast = document.getElementById("toast");
  toast.textContent = text;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 3500);
}
