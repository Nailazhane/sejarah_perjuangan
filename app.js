const $=(s,e=document)=>e.querySelector(s),$$=(s,e=document)=>[...e.querySelectorAll(s)];
const P=[["index.html","Beranda"],["materi.html","Materi"],["museum.html","Museum 3D"],["game.html","Game"],["kesimpulan.html","Kesimpulan"]];
const cur=location.pathname.split("/").pop()||"index.html";
$("#nav").innerHTML=`<div class="wrap"><a class="brand" href="index.html">🏛️ Museum Perjuangan</a><button id="bt" aria-label="Menu">☰</button><nav id="mn">${P.map(p=>`<a href="${p[0]}" class="${p[0]==cur?"on":""}">${p[1]}</a>`).join("")}</nav></div>`;
$("#bt").onclick=()=>$("#mn").classList.toggle("open");
$("#ft").innerHTML=`<div class="wrap"><b>Museum Perjuangan Fisik Indonesia (1945–1949)</b><br>Sejarah · Kelas XI RPL 3 · Naila Zharifah Nikeisha<br><small>Kemerdekaan bukan hadiah, melainkan hasil perjuangan dan pengorbanan bangsa.</small></div>`;
const c5=(e,k)=>`<article class="card ev ${k}"><div class="hd"><div><span class="dt">${e.w}</span><h3>${e.n}</h3></div><span class="chev">⌄</span></div><div class="bd">${[["🔖","Apa",e.a],["👥","Siapa",e.p],["📅","Kapan",e.w],["📍","Di mana",e.k],["❓","Mengapa",e.m],["🧩","Bagaimana",e.b]].map(r=>`<div><small>${r[0]} ${r[1]}</small>${r[2]}</div>`).join("")}</div></article>`;
const tl=$("#tl");
if(tl){tl.innerHTML=EV.map(e=>c5(e,"fz")).join("");$("#td").innerHTML=DP.map(e=>c5(e,"dp")).join("");
$$(".ev .hd").forEach(h=>h.onclick=()=>h.parentElement.classList.toggle("open"));
const io=new IntersectionObserver(r=>r.forEach(x=>x.isIntersecting&&x.target.classList.add("in")),{threshold:.15});$$(".ev").forEach(e=>io.observe(e));}
function conf(em){const E=em||["🎉","⭐","✨","🇮🇩","🕊️"];for(let i=0;i<26;i++){const s=document.createElement("span");s.className="cf";s.textContent=E[i%E.length];s.style.cssText=`left:${Math.random()*100}vw;animation-delay:${Math.random()*.5}s;font-size:${18+Math.random()*18}px`;document.body.appendChild(s);setTimeout(()=>s.remove(),2600)}}
function toast(t){const o=document.createElement("div");o.className="toast";o.innerHTML=t;document.body.appendChild(o);setTimeout(()=>o.remove(),3800)}

$$(".tabs button").forEach(b=>b.onclick=()=>{$$(".tabs button,.pane").forEach(x=>x.classList.remove("on"));b.classList.add("on");$("#"+b.dataset.t).classList.add("on")});
