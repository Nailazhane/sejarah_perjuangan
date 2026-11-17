const IC={medan:"🏙️",surabaya:"💥",ambarawa:"🦀",lautan:"🔥",margarana:"🌴",westerling:"🕯️",su:"🏛️",hooge:"🌷",linggarjati:"⛰️",renville:"⚓",roem:"🏨",kmb:"🕊️"};
const PT=["repeating-linear-gradient(90deg,transparent 0 11%,rgba(80,50,20,.2) 11% calc(11% + 6px))", "radial-gradient(rgba(255,255,255,.25) 2px,transparent 3px) 0 0/28px 28px", "repeating-linear-gradient(45deg,rgba(0,0,0,.08) 0 10px,transparent 10px 20px)", "linear-gradient(rgba(0,0,0,.14) 2px,transparent 2px) 0 0/100% 40px,linear-gradient(90deg,rgba(0,0,0,.14) 2px,transparent 2px) 0 0/80px 40px", "repeating-linear-gradient(0deg,rgba(255,255,255,.1) 0 3px,transparent 3px 22px)"];
const TH=[["#fdf3d6","#ecd49a","#c9a46a","#7a5428",0,"#f6d7a7,#fbeedd",["✨"],"🏛️🖼️🏛️","#8a5a2e"],
["#bfe8c8","#5fb27a","#8a6a3a","#4a3418",1,"#bff0e0,#effbd6",["🌴","🍃"],"🌴🏙️🌴","#2f7a4d"],
["#ffb199","#c8321f","#4a2a24","#1f0d0a",3,"#ff9a6a,#ffd0a0",["🔥","💥"],"💥🇮🇩💥","#8c1d12"],
["#dfe8e2","#8fa89b","#5a6a52","#2c3a2a",4,"#c9d6d2,#eef2ee",["🌫️","🍃"],"⛰️🦀⛰️","#4b6356"],
["#3b2a3a","#12121c","#2a1d1d","#0a0707",2,"#ff7a2e,#2a1020",["🔥","🔥","✨"],"🔥🏚️🔥","#5c1a12"],
["#ffd1e0","#ff9a62","#d9a45b","#8a5a22",1,"#ffb27a,#ffe0b8",["🌺","🌸"],"🛕🌺🛕","#a83a2a"],
["#5b6272","#242a3a","#2d2d36","#0e0f16",2,"#3a3f55,#8b8fa0",["🕯️","🌑"],"🕯️⚖️🕯️","#2b2f40"],
["#fff3b0","#ffc94a","#d8a850","#8a6320",4,"#ffe08a,#fff8dc",["⭐","☀️"],"☀️🏛️☀️","#9a6a1c"],
["#dcecff","#5b8fd9","#f1f1f1","#6f86b5",3,"#cfe4ff,#fff",["🌷","💧"],"🌷🪟🌷","#1f4f99"],
["#d5f0cf","#7cc47a","#9b7a45","#4f3b1d",4,"#cdeec0,#f4ffe0",["🍃","🦋"],"⛰️🌳⛰️","#3d7a35"],
["#7fb6d6","#1c4a78","#7a5b3a","#3a2713",0,"#8fd0f0,#dff3ff",["🌊","⚓"],"⚓🚢⚓","#13395e"],
["#f0dcc0","#a67c52","#6b3f2a","#2f1a10",2,"#e8c9a0,#fff0d8",["🕯️","✉️"],"🏨🕰️🏨","#6a3b22"],
["#e6d4ff","#8a5fd0","#e9e0f5","#6a4aa0",1,"#d8c0ff,#fff0e0",["🕊️","🌷"],"🕊️🏛️🕊️","#4a2d86"],
["#fff0c2","#e0443e","#f2d48a","#a3231f",0,"#ffe3a0,#ffd0d0",["🇮🇩","🎉","✨"],"🇮🇩🏅🇮🇩","#9d1f1a"]];
const FA=["Indonesia merdeka 17 Agustus 1945, tetapi perjuangan mempertahankannya baru dimulai!","Rakyat Medan melawan Sekutu dan NICA sejak Oktober 1945.","Tanggal 10 November kini diperingati sebagai Hari Pahlawan.","Supit urang meniru capit udang: menjepit lawan dari dua sisi.","Lagu “Halo-Halo Bandung” sering dikaitkan dengan peristiwa ini.","Puputan berarti berjuang sampai titik darah penghabisan.","Korban peristiwa ini diperingati setiap 11 Desember sebagai Hari Korban 40.000 Jiwa.","Setiap 1 Maret diperingati sebagai Hari Penegakan Kedaulatan Negara.","Perundingan ini berlangsung di Belanda, tetapi belum menghasilkan kesepakatan.","Gedung perundingan Linggarjati kini menjadi museum di Kuningan.","Perundingan Renville digelar di atas kapal perang, bukan di gedung!","Hotel Des Indes di Jakarta menjadi saksi perundingan Roem–Royen.","Kedaulatan Indonesia resmi diserahkan pada 27 Desember 1949 setelah KMB.","Pahlawan tidak hanya berjuang dengan senjata, tetapi juga lewat meja perundingan!"];
const ART={medan:["🌴🏙️","🪖🛡️","✊🇮🇩"],surabaya:["⚓🌆","🎙️🪖","💥"],ambarawa:["⛰️🌿","🎖️🪖","🦀"],lautan:["🌇🏘️","👨‍👩‍👧🪖","🔥"],margarana:["🌴🛕","🏹🪖","🌺"],westerling:["🏝️🌾","🕯️🪖","⚖️"],su:["🏛️🏯","🤝🪖","🌍👀"],hooge:["🌷🏰","🤝📜","🚫"],linggarjati:["⛰️🌳","🤝🕊️","📜"],renville:["⚓🚢","🖊️📜","🗺️"],roem:["🏨🕰️","🤝🖊️","🏯"],kmb:["🕊️🏛️","🤝🌍","📜🇮🇩"]};
const HUE={medan:130,surabaya:5,ambarawa:150,lautan:18,margarana:340,westerling:230,su:48,hooge:215,linggarjati:110,renville:205,roem:25,kmb:265};
const mk=(e,wg)=>({t:e.n,s:e.w,ic:IC[e.id],h:HUE[e.id],sh:e.n.replace("Pertempuran ","").replace("Perjanjian ","").slice(0,18),wg,ex:[
{i:ART[e.id][0],t:"Peristiwa",d:`${e.a} (${e.w})`},
{i:ART[e.id][1],t:"Tokoh & Tempat",d:`${e.p} Lokasi: ${e.k}.`,big:1},
{i:ART[e.id][2],t:"Latar & Hasil",d:`${e.m} ${e.b}`}]});
const WF="Sayap Pertempuran Fisik ⚔️",WD="Sayap Perjuangan Diplomasi 🕊️";
const R=[
{t:"Lobi Museum",s:"Selamat datang",ic:"🏛️",h:38,sh:"Lobi",wg:"Lobi Utama",ex:[
{i:"⚔️",t:"Perjuangan Fisik",d:"Mempertahankan kemerdekaan melalui perlawanan bersenjata melawan Belanda dan Sekutu."},
{i:"🕊️",t:"Perjuangan Diplomasi",d:"Memperjuangkan kedaulatan lewat perundingan, dialog, dan perjanjian damai, bukan pertempuran."},
{i:"🧭",t:"Cara Menjelajah",d:"Tekan Maju untuk ke ruang berikutnya. Geser layar untuk melihat sekeliling, ketuk koleksi untuk membaca, dan cari ⭐ tersembunyi di tiap ruang!"}]},
...EV.map(e=>mk(e,WF)),...DP.map(e=>mk(e,WD)),
{t:"Aula Kesimpulan",s:"Perjuangan 1945–1949",ic:"🏅",h:45,sh:"Aula",wg:"Aula Utama",ex:[
{i:"🦁",t:"Keberanian & Persatuan",d:"Rakyat dan pejuang dari Sumatera sampai Sulawesi bersatu menolak penjajahan kembali."},
{i:"🕊️",t:"Jalur Diplomasi",d:"Hooge-Veluwe, Linggarjati, Renville, Roem–Royen, dan KMB berujung pengakuan kedaulatan."},
{i:"🇮🇩",t:"Pesan Terakhir",d:"Kemerdekaan bukan hadiah, melainkan hasil perjuangan dan pengorbanan bangsa."}]}];
const TOT=R.reduce((a,q)=>a+q.ex.length,0);
let r=0,x=0,y=0,z=1,vx=0,dg=0,mv=0,sx=0,sy=0,lx=0,ly=0,busy=0,vis=new Set(),stv=new Set();
try{vis=new Set(JSON.parse(localStorage.getItem("vis")||"[]"));stv=new Set(JSON.parse(localStorage.getItem("stv")||"[]"))}catch(_){}
const st=$("#stage"),pn=$("#pano"),zm=$("#zoom");
st.insertAdjacentHTML("afterbegin",'<div id="fx"></div>');
const mx=()=>st.clientWidth*1.2,cl=(v,a,b)=>Math.max(a,Math.min(b,v));
const gr=(h,i)=>`background:linear-gradient(135deg,hsl(${h+i*10} 60% 86%),hsl(${h+i*10+20} 50% 68%))`;
function ap(){x=cl(x,0,mx());y=cl(y,-40,40);pn.style.transform=`translate3d(${-x}px,${y}px,0)`;zm.style.transform=`scale(${z})`}
function cnt(){$("#cnt").textContent=`🔍 ${vis.size}/${TOT} · ⭐ ${stv.size}/${R.length}`}
function render(){const q=R[r],n=q.ex.length,p=i=>16+68*i/(n-1),T=TH[r];
["wa","wb","fa","fb"].forEach((k,i)=>pn.style.setProperty("--"+k,T[i]));pn.style.setProperty("--pat",PT[T[4]]);pn.style.setProperty("--sky",`linear-gradient(${T[5]})`);pn.style.setProperty("--dr",T[8]);pn.style.setProperty("--h",q.h);
$("#fx").innerHTML=Array.from({length:14},(_,i)=>`<span style="left:${(i*7.3+r*3)%98}%;animation-duration:${6+(i*1.7)%6}s;animation-delay:-${(i*1.3)%8}s">${T[6][i%T[6].length]}</span>`).join("");
$("#rt").innerHTML=`<small>${q.wg} · Ruang ${r+1} dari ${R.length}</small><b>${q.ic} ${q.t}</b><span>${q.s}</span>`;
let h="";const dc=[...T[7].matchAll(/\p{Extended_Pictographic}\uFE0F?/gu)].map(v=>v[0]);
h+=dc.map((c,i)=>`<div class="dc" style="left:${[6,50,94][i]}%">${c}</div>`).join("");
for(let i=0;i<n-1;i++)h+=`<div class="win" style="left:${(p(i)+p(i+1))/2}%"></div>`;
h+=q.ex.map((e,i)=>`<div class="ex${e.big?" big":""}${vis.has(r+"-"+i)?" seen":""}" data-i="${i}" style="left:${p(i)}%"><div class="fr"><div class="pic" style="${gr(q.h,i)}"><span>${e.i}</span></div><b>${e.t}</b><small>${q.sh}</small><span class="hot"></span></div></div>`).join("");
if(!stv.has(r))h+=`<div class="star" style="left:${[30,70,50,25,78,40,65,22,72,35,60,28,80,55][r]}%">⭐</div>`;
if(r>0)h+=`<div class="door l" data-g="-1">⬅<br>${R[r-1].ic}<br>${R[r-1].t}</div>`;
h+=r<R.length-1?`<div class="door r" data-g="1">➡<br>${R[r+1].ic}<br>${R[r+1].t}</div>`:`<a class="door r" href="game.html">🎮<br>Ruang Game</a>`;
$("#items").innerHTML=h;
$("#dots").innerHTML=R.map((v,i)=>`<i class="${i==r?"on":""}" data-r="${i}" title="${v.t}"></i>`).join("");cnt()}
function go(n){if(n<0||n>=R.length||n==r||busy)return;busy=1;const d=n>r?1:-1;
zm.style.transition=".4s";zm.style.opacity=0;zm.style.transform=`scale(${d>0?1.8:.6})`;
setTimeout(()=>{r=n;x=d>0?0:mx();y=0;z=1;render();pn.style.transform=`translate3d(${-x}px,0,0)`;zm.style.transition="none";zm.style.transform=`scale(${d>0?.6:1.6})`;zm.offsetWidth;zm.style.transition=".4s";zm.style.opacity=1;ap();setTimeout(()=>busy=0,420)},400)}
function coast(){if(dg)return;if(Math.abs(vx)<.4&&Math.abs(y)<1)return;x+=vx;vx*=.92;y*=.85;ap();requestAnimationFrame(coast)}
function show(i){const e=R[r].ex[i];vis.add(r+"-"+i);try{localStorage.setItem("vis",JSON.stringify([...vis]))}catch(_){}
$(`.ex[data-i="${i}"]`).classList.add("seen");cnt();const dn=R[r].ex.every((_,k)=>vis.has(r+"-"+k));
$("#modal").innerHTML=`<div class="mc"><div class="mi pic" style="${gr(R[r].h,i)}"><span>${e.i}</span></div><small>${R[r].t}</small><h3>${e.t}</h3><p>${e.d}</p><button class="btn" id="mx">Tutup</button>${vis.size==TOT?'<p class="win2">🏅 Selamat! Semua koleksi sudah kamu temukan. Kamu Penjaga Sejarah!</p>':""}</div>`;
$("#modal").classList.add("on");$("#mx").onclick=()=>{$("#modal").classList.remove("on");if(dn&&!R[r].dn){R[r].dn=1;conf();toast("✅ Ruang selesai! Tekan <b>Maju</b> ke ruang berikutnya")}}}
function star(){stv.add(r);try{localStorage.setItem("stv",JSON.stringify([...stv]))}catch(_){}cnt();conf();const s=$(".star");if(s)s.remove();
$("#modal").innerHTML=`<div class="mc"><div class="mi">⭐</div><small>Kejutan! Bintang ${stv.size}/${R.length}</small><h3>Fakta Seru</h3><p>${FA[r]}</p>${stv.size==R.length?'<p class="win2">🌟 Semua bintang terkumpul! Kamu Penjaga Rahasia Museum!</p>':""}<button class="btn" id="mx">Tutup</button></div>`;$("#modal").classList.add("on");$("#mx").onclick=()=>$("#modal").classList.remove("on")}
st.addEventListener("pointerdown",e=>{if(e.target.closest("button,#modal,#intro,#ctl"))return;dg=1;mv=0;vx=0;sx=lx=e.clientX;sy=ly=e.clientY});
addEventListener("pointermove",e=>{if(!dg)return;if(Math.abs(e.clientX-sx)+Math.abs(e.clientY-sy)>6)mv=1;vx=(lx-e.clientX)/z;x+=vx;y+=(e.clientY-ly)*.5;lx=e.clientX;ly=e.clientY;ap()});
addEventListener("pointerup",()=>{if(!dg)return;dg=0;coast()});
st.addEventListener("click",e=>{if(mv){mv=0;return}const g=e.target.closest("[data-g]");if(g)return go(r+ +g.dataset.g);if(e.target.closest(".star"))return star();const ex=e.target.closest(".ex");if(ex)show(+ex.dataset.i)});
st.addEventListener("wheel",e=>{e.preventDefault();z=cl(z-e.deltaY*.001,1,1.6);ap()},{passive:false});
$("#dots").onclick=e=>{if(e.target.dataset.r)go(+e.target.dataset.r)};
$("#fwd").onclick=()=>go(r+1);$("#back").onclick=()=>go(r-1);
$("#pl").onclick=()=>{vx=-26;coast()};$("#pr").onclick=()=>{vx=26;coast()};
$("#zi").onclick=()=>{z=cl(z+.15,1,1.6);ap()};$("#zo").onclick=()=>{z=cl(z-.15,1,1.6);ap()};
$("#modal").onclick=e=>{if(e.target.id=="modal")e.target.classList.remove("on")};
$("#go").onclick=()=>$("#intro").style.display="none";
addEventListener("keydown",e=>{const k=e.key;if(k=="ArrowLeft"){vx=-22;coast()}else if(k=="ArrowRight"){vx=22;coast()}else if(k=="ArrowUp")go(r+1);else if(k=="ArrowDown")go(r-1);else if(k=="Escape")$("#modal").classList.remove("on")});
addEventListener("resize",ap);
render();ap();
