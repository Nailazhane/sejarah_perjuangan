function fin(e,s,n,again){e.innerHTML=`<div style="text-align:center"><div class="score">${s}/${n}</div><h3>${s>=n*.8?"Luar biasa, Pahlawan Sejarah! 🏅":s>=n*.5?"Bagus! Terus belajar 💪":"Ayo baca materi lagi 📚"}</h3><br><button class="btn" id="ag">Main Lagi</button></div>`;$("#ag").onclick=again}
function nxt(f,fn){f.style.display="block";f.insertAdjacentHTML("beforeend",`<br><button class="btn" id="nx" style="margin-top:8px">Lanjut →</button>`);$("#nx").onclick=fn}

/* ===== 1. KUIS (jawaban benar ditulis pertama, lalu diacak) ===== */
const Q=[["Perjuangan fisik adalah…",["mempertahankan kemerdekaan melalui perlawanan bersenjata","perundingan di meja diplomasi","pembangunan ekonomi","pertukaran budaya"]],
["Siapa pemimpin TKR di Pertempuran Ambarawa?",["Kolonel Soedirman","Bung Tomo","I Gusti Ngurah Rai","Raymond Westerling"]],
["Strategi pengepungan di Ambarawa disebut…",["Supit urang","Gerilya laut","Benteng stelsel","Bumi hangus"]],
["Bandung Lautan Api terjadi di…",["Bandung Selatan","Bandung Utara","Cimahi","Garut"]],
["Siapa memimpin Puputan Margarana di Bali?",["I Gusti Ngurah Rai","Sri Sultan HB IX","Letkol Soeharto","Kolonel Soedirman"]],
["Tujuan Serangan Umum 1 Maret 1949?",["Menunjukkan dunia bahwa TNI dan RI masih ada","Merebut Surabaya","Mengusir Jepang","Membangun benteng"]],
["Berapa lama TNI menguasai Yogyakarta pada Serangan Umum?",["Sekitar enam jam","Tiga hari","Satu minggu","Satu bulan"]],
["Peristiwa Westerling terjadi di…",["Sulawesi Selatan","Sumatera Utara","Bali","Jawa Barat"]],
["Mengapa rakyat Surabaya melawan pada 10 November 1945?",["Menolak ultimatum Sekutu untuk menyerahkan senjata","Ingin berdagang dengan Sekutu","Mengikuti perintah Belanda","Merayakan hari raya"]],
["TKR adalah singkatan dari…",["Tentara Keamanan Rakyat","Tentara Kerajaan Republik","Tim Keamanan Rakyat","Tentara Khusus Rakyat"]],
["Puputan berarti…",["Perlawanan sampai titik darah penghabisan","Perundingan damai","Pelarian ke hutan","Pembangunan benteng"]],
["Pertempuran 10 November 1945 kini diperingati sebagai…",["Hari Pahlawan","Hari Kartini","Hari Sumpah Pemuda","Hari Kemerdekaan"]]];
Q.push(["Perjuangan diplomasi dilakukan melalui…",["perundingan dan perjanjian damai","pertempuran bersenjata","gerilya hutan","blokade laut"]],["Perundingan Hooge-Veluwe diadakan di…",["Belanda","Jakarta","Kuningan","Yogyakarta"]],["Perjanjian Linggarjati menghasilkan pengakuan…",["de facto wilayah RI dan rencana RIS","kedaulatan penuh RI","Irian Barat milik RI","Garis Van Mook"]],["Perjanjian Renville disepakati di atas…",["Kapal USS Renville","Hotel Des Indes","Gedung Linggarjati","Istana Den Haag"]],["Akibat Perjanjian Renville, wilayah RI…",["menyempit","meluas","tidak berubah","hilang seluruhnya"]],["Perjanjian Roem–Royen dilakukan di…",["Hotel Des Indes, Jakarta","Den Haag","Linggarjati","Hooge-Veluwe"]],["Hasil Roem–Royen: pemerintahan RI kembali ke…",["Yogyakarta","Bandung","Surabaya","Medan"]],["Konferensi Meja Bundar berlangsung di…",["Den Haag, Belanda","Jakarta","Bali","Kuningan"]],["Siapa memimpin delegasi RI pada KMB?",["Mohammad Hatta","Mohammad Roem","Amir Sjarifuddin","Sutan Sjahrir"]],["Masalah yang ditunda dalam KMB adalah…",["Irian Barat","Jawa","Sumatra","Bali"]]);
let strk=0;const FK=["Perjanjian Renville berlangsung di atas kapal perang!","Strategi supit urang meniru capit udang.","Hari Pahlawan jatuh setiap 10 November.","KMB berlangsung di Den Haag, Belanda."];
function bonus(ok){if(!ok){strk=0;return}strk++;conf();if(strk%3==0)toast("🔥 Beruntun "+strk+"x! Fakta seru: "+FK[(strk/3-1)%FK.length])}
let qi,qs,qq;
function qStart(){qq=sh(Q).slice(0,10);qi=0;qs=0;qShow()}
function qShow(){const e=$("#q");if(qi>=qq.length)return fin(e,qs,qq.length,qStart);
const [t,o]=qq[qi],opts=sh(o.map((x,i)=>[x,i==0]));
e.innerHTML=`<div class="bar"><i style="width:${qi/qq.length*100}%"></i></div><small>Soal ${qi+1} dari ${qq.length}</small><h3>${t}</h3>${opts.map(x=>`<button class="opt" data-c="${x[1]}">${x[0]}</button>`).join("")}<div class="fb" id="fb"></div>`;
$$(".opt",e).forEach(b=>b.onclick=()=>{const c=b.dataset.c=="true";if(c)qs++;bonus(c);$$(".opt",e).forEach(x=>{x.disabled=true;if(x.dataset.c=="true")x.classList.add("ok")});if(!c)b.classList.add("no");const f=$("#fb");f.innerHTML=c?"✅ Benar!":"❌ Belum tepat.";nxt(f,()=>{qi++;qShow()})})}

/* ===== 2. BENAR ATAU SALAH ===== */
const TF=[["Perjuangan fisik dilakukan dengan perlawanan bersenjata.",1,"Perjuangan fisik adalah mempertahankan kemerdekaan lewat perlawanan bersenjata."],
["Pertempuran Ambarawa dipimpin oleh I Gusti Ngurah Rai.",0,"Pertempuran Ambarawa dipimpin Kolonel Soedirman."],
["Bandung Lautan Api terjadi di Bandung Selatan.",1,"Rakyat meninggalkan Bandung bagian selatan sambil membakar bangunan."],
["Puputan Margarana terjadi di Sumatera Utara.",0,"Puputan Margarana terjadi di Desa Marga, Tabanan, Bali."],
["Serangan Umum 1 Maret 1949 berlangsung di Yogyakarta.",1,"TNI menguasai Yogyakarta sekitar enam jam."],
["Rakyat Surabaya melawan karena ingin bekerja sama dengan Sekutu.",0,"Rakyat menolak ultimatum Sekutu untuk menyerahkan senjata."],
["Peristiwa Westerling terjadi di Sulawesi Selatan.",1,"Terjadi pada Desember 1946 – Maret 1947."],
["Strategi supit urang digunakan di Ambarawa.",1,"Supit urang adalah pengepungan seperti capit udang."],
["Pada Serangan Umum, TNI menguasai Yogyakarta selama sebulan.",0,"TNI menguasai Yogyakarta hanya sekitar enam jam."],
["Pertempuran Medan Area dimulai pada 13 Oktober 1945.",1,"Pertempuran berlangsung dari 13 Oktober 1945 hingga 1946."]];
TF.push(["Perjanjian Linggarjati dilakukan di Kuningan, Jawa Barat.",1,"Linggarjati ada di Kuningan, Jawa Barat."],["Konferensi Meja Bundar diadakan di Jakarta.",0,"KMB diadakan di Den Haag, Belanda."],["Perjanjian Renville membuat wilayah RI menyempit.",1,"Disepakati Garis Van Mook."],["Perundingan Hooge-Veluwe berhasil menghasilkan kesepakatan.",0,"Perundingan gagal karena Belanda tidak mengakui de facto Jawa dan Sumatra."],["Perjanjian Roem–Royen mengembalikan pemerintahan RI ke Yogyakarta.",1,"Para pemimpin juga dibebaskan."]);
let bi,bs,bq;
function bStart(){bq=sh(TF).slice(0,8);bi=0;bs=0;bShow()}
function bShow(){const e=$("#b");if(bi>=bq.length)return fin(e,bs,bq.length,bStart);
const [t,a,ex]=bq[bi];
e.innerHTML=`<div class="bar"><i style="width:${bi/bq.length*100}%"></i></div><small>Pernyataan ${bi+1} dari ${bq.length}</small><h3>${t}</h3><div style="display:flex;gap:12px;margin-top:14px"><button class="opt" data-v="1" style="text-align:center">✅ Benar</button><button class="opt" data-v="0" style="text-align:center">❌ Salah</button></div><div class="fb" id="bf"></div>`;
$$(".opt",e).forEach(b=>b.onclick=()=>{const c=(+b.dataset.v)==a;if(c)bs++;bonus(c);$$(".opt",e).forEach(x=>x.disabled=true);b.classList.add(c?"ok":"no");const f=$("#bf");f.innerHTML=(c?"✅ Tepat! ":"❌ Kurang tepat. ")+ex;nxt(f,()=>{bi++;bShow()})})}

/* ===== 3. SIAPA AKU? (makin sedikit petunjuk, makin besar poin) ===== */
const WHO=[["Kolonel Soedirman",["Aku seorang kolonel yang memimpin TKR.","Aku bertempur di Ambarawa pada akhir 1945.","Aku memakai strategi pengepungan supit urang."]],
["I Gusti Ngurah Rai",["Aku memimpin pasukan Ciung Wanara.","Aku berjuang di Bali melawan Belanda.","Perlawananku berakhir pada Puputan Margarana."]],
["Bung Tomo",["Aku berada di Surabaya pada November 1945.","Aku dikenal membakar semangat rakyat lewat pidato.","Rakyat Surabaya menolak ultimatum Sekutu bersamaku."]],
["Raymond Westerling",["Aku seorang kapten pasukan Belanda.","Pasukanku bernama DST/KNIL.","Operasiku terjadi di Sulawesi Selatan (1946–1947)."]],
["Letkol Soeharto",["Aku berpangkat letnan kolonel.","Aku terlibat dalam serangan selama sekitar enam jam.","Aku ikut dalam Serangan Umum 1 Maret 1949 di Yogyakarta."]],
["Sri Sultan HB IX",["Aku seorang sultan di Yogyakarta.","Aku mendukung perjuangan rakyat.","Aku mendukung Serangan Umum 1 Maret 1949."]]];
WHO.push(["Mohammad Hatta",["Aku memimpin delegasi RI.","Aku hadir di Den Haag, Belanda.","Aku ikut Konferensi Meja Bundar 1949."]],["Mohammad Roem",["Aku diplomat Indonesia.","Aku berunding di Hotel Des Indes.","Namaku ada pada perjanjian bersama Van Royen."]],["Sutan Sjahrir",["Aku perunding Indonesia.","Aku ikut perundingan di Belanda pada 1946.","Aku juga hadir pada Perjanjian Linggarjati."]]);
let wi,ws,wq,wh,wo;
function wStart(){wq=sh(WHO).slice(0,5);wi=0;ws=0;wShow()}
function wShow(){const e=$("#s");if(wi>=wq.length)return fin(e,ws,wq.length*3,wStart);wh=1;wo=sh([wq[wi][0],...sh(WHO.map(w=>w[0]).filter(n=>n!=wq[wi][0])).slice(0,3)]);draw()}
function draw(){const e=$("#s"),[nm,cl]=wq[wi];
e.innerHTML=`<div class="bar"><i style="width:${wi/wq.length*100}%"></i></div><small>Tokoh ${wi+1} dari ${wq.length} · Skor ${ws}</small><h3>🕵️ Tebak tokoh ini</h3>${cl.slice(0,wh).map((c,i)=>`<p style="background:var(--c1);border-left:4px solid var(--gold);padding:8px 12px;margin:8px 0;border-radius:8px">${i+1}. ${c}</p>`).join("")}${wh<3?'<button class="btn o" id="hn">💡 Petunjuk berikutnya (−1 poin)</button>':""}${wo.map(n=>`<button class="opt" data-n="${n}">${n}</button>`).join("")}<div class="fb" id="sf"></div>`;
const hn=$("#hn");if(hn)hn.onclick=()=>{wh++;draw()};
$$(".opt",e).forEach(b=>b.onclick=()=>{const c=b.dataset.n==nm;if(c)ws+=4-wh;bonus(c);$$(".opt",e).forEach(x=>{x.disabled=true;if(x.dataset.n==nm)x.classList.add("ok")});if(!c)b.classList.add("no");if(hn)hn.remove();const f=$("#sf");f.innerHTML=c?`✅ Benar! +${4-wh} poin`:`❌ Jawabannya ${nm}`;nxt(f,()=>{wi++;wShow()})})}

/* ===== 4. KARTU MEMORI: istilah <-> arti ===== */
let kp,kf,kl,kc;
function kStart(){const p=sh(IS).slice(0,6);kp=0;kf=[];kl=0;kc=0;
const cs=sh(p.flatMap((x,i)=>[{i,t:x[0],a:0},{i,t:x[1],a:1}]));
$("#k").innerHTML=`<h3>Kartu Memori: istilah ↔ artinya</h3><p class="sub">Balik dua kartu dan cocokkan istilah dengan artinya. Langkah: <b id="kc">0</b></p><div class="mem">${cs.map((c,n)=>`<button class="mc2" data-i="${c.i}" data-n="${n}"><span class="bk">❓</span><span class="ft ${c.a?"ar":""}">${c.t}</span></button>`).join("")}</div><div class="fb" id="kfb"></div>`;
$$("#k .mc2").forEach(b=>b.onclick=()=>{if(kl||b.classList.contains("up"))return;b.classList.add("up");kf.push(b);if(kf.length<2)return;kc++;$("#kc").textContent=kc;const[a,c]=kf;kf=[];
if(a.dataset.i==c.dataset.i){a.className=c.className="mc2 done";if(++kp==6){const f=$("#kfb");f.style.display="block";f.innerHTML=`🎉 Semua pasangan ketemu dalam ${kc} langkah! <button class="btn" id="rk">Main Lagi</button>`;$("#rk").onclick=kStart}}
else{kl=1;setTimeout(()=>{a.classList.remove("up");c.classList.remove("up");kl=0},800)}})}
let di,ds,dq;
function dStart(){dq=sh(DP).slice(0,5);di=0;ds=0;dShow()}
function dShow(){const e=$("#d");if(di>=dq.length)return fin(e,ds,dq.length,dStart);const x=dq[di],k=sh([["📅 Kapan",x.w],["📍 Di mana",x.k],["❓ Mengapa",x.m],["🧩 Bagaimana",x.b],["🔖 Apa",x.a]])[0],o=sh([x.n,...sh(DP.filter(v=>v!=x).map(v=>v.n)).slice(0,3)]);
e.innerHTML=`<div class="bar"><i style="width:${di/dq.length*100}%"></i></div><small>Perundingan ${di+1} dari ${dq.length}</small><h3>🕊️ Perundingan apakah ini?</h3><p style="background:var(--c1);border-left:4px solid var(--gold);padding:8px 12px;margin:8px 0;border-radius:8px"><b>${k[0]}:</b> ${k[1]}</p>${o.map(n=>`<button class="opt" data-n="${n}">${n}</button>`).join("")}<div class="fb" id="df"></div>`;
$$(".opt",e).forEach(b=>b.onclick=()=>{const c=b.dataset.n==x.n;if(c)ds++;bonus(c);$$(".opt",e).forEach(y=>{y.disabled=true;if(y.dataset.n==x.n)y.classList.add("ok")});if(!c)b.classList.add("no");const f=$("#df");f.innerHTML=c?"✅ Benar!":"❌ Jawabannya "+x.n;nxt(f,()=>{di++;dShow()})})}
dStart();qStart();bStart();wStart();kStart();
