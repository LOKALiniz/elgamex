// Saat
setInterval(() => {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString("tr-TR");
}, 1000);

// Karşılama mesajı
document.getElementById("welcome").textContent =
  ">> Hoş geldin savaşçı. Kod gücün aktif!";

// Tema değiştirici
function toggleTheme() {
  document.body.classList.toggle("light");
}

// Gerçek ziyaretçi sayacı
fetch('https://api.countapi.xyz/hit/lportal/ziyaretci')
  .then(res => res.json())
  .then(data => {
    document.getElementById("visitor-count").textContent =
      `Ziyaretçi sayısı: ${data.value}`;
  });

// Yağmur damlası üretimi
function createRaindrop() {
  const drop = document.createElement("div");
  drop.classList.add("raindrop");

  drop.style.left = Math.random() * window.innerWidth + "px";
  drop.style.animationDuration = 0.5 + Math.random() * 0.5 + "s";
  drop.style.opacity = Math.random();

  document.getElementById("rain").appendChild(drop);

  setTimeout(() => {
    drop.remove();
  }, 1000);
}

setInterval(createRaindrop, 100);
function toggleProjects() {
  const list = document.getElementById("project-list");
  list.style.display = list.style.display === "none" ? "block" : "none";
}

function showCode(projectId) {
  const codeDisplay = document.getElementById("code-display");
  const codeContent = document.getElementById("code-content");

  const codes = {
    project1: `// Yapay Zeka Botu\nfunction respond(input) {\n  return "Merhaba " + input;\n}`,
    project2: `// Web Portalı\nconst user = "Ziyaretçi";\ndocument.body.innerHTML = "Hoş geldin " + user;`
  };

  codeContent.textContent = codes[projectId];
  codeDisplay.style.display = "block";
}
const mesajlar = [
  "Kodlar seninle olsun, savaşçı.",
  "Bir satır kod, bin duvarı aşar.",
  "Bugün birini mutlu edecek bir komut yaz."
];
const rasgele = mesajlar[Math.floor(Math.random() * mesajlar.length)];
document.getElementById("wizard").textContent = `🧙‍♂️ Kod Büyücüsü: ${rasgele}`;

function toggleTheme() {
  const body = document.body;
  const avatarBox = document.getElementById("avatar-reaction");

  const isCurrentlyLight = body.classList.contains("light");

  body.classList.add("theme-transition");

  setTimeout(() => {
    body.classList.remove("theme-transition");
    body.classList.toggle("light");

    const isNowLight = body.classList.contains("light");
    avatarBox.textContent = isNowLight
      ? "🌞 Light mod: Renkler dalga gibi yayılıyor."
      : "🌑 Dark mod: Gölge ritüeli geri döndü.";

    avatarBox.classList.add("glow");
    setTimeout(() => avatarBox.classList.remove("glow"), 1500);
  }, 2000); // 5 saniye sonra geçiş gerçekleşir
}
function toggleTheme() {
  const body = document.body;
  const isLight = body.classList.toggle("light");

  // Modu kaydet
  localStorage.setItem("theme", isLight ? "light" : "dark");
}

function goToKodlar() {
  // Mod zaten kaydedildi, sadece yönlendir
  window.location.href = "kodlar.html";
}







