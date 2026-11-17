$("#tk").innerHTML=TK.map(t=>`<div class="card"><div class="ic">${t[0]}</div><h3>${t[1]}</h3>${t[2]}</div>`).join("");
$("#is").innerHTML=IS.map(t=>`<div class="card"><h3>${t[0]}</h3>${t[1]}</div>`).join("");
$("#pm").innerHTML=PM.map(t=>`<div class="card"><div class="dd">${t[0]}</div><h3>${t[1]}</h3>${t[2]}</div>`).join("");
const tab=(L,c)=>`<h3 style="margin:14px 0 8px">${L}</h3><table class="tbl"><tr><th>Peristiwa</th><th>Waktu</th><th>Tempat</th><th>Pihak terlibat</th></tr>${c.map(e=>`<tr><td><b>${e.n}</b></td><td>${e.w}</td><td>${e.k}</td><td>${e.p}</td></tr>`).join("")}</table>`;
$("#tb").innerHTML=tab("⚔️ Pertempuran Fisik",EV)+tab("🕊️ Perjuangan Diplomasi",DP);
