const kodlar = {
  ask: [
    {
      type: "link",
      label: "📁 Çıkma Teklifi Kodları klasörü",
      url: "https://drive.google.com/drive/folders/1RaSuowyUQKCGaLbHiZdZstP1yz0F8Ula"
    }
  ],
  cicek: [
    {
      type: "link",
      label: "🌸 Sevgiliye Çiçek Kodları klasörü",
      url: "https://drive.google.com/drive/folders/1UxpvhINAmz-bpMeCMWHPrNiUGTR-DxDH"
    }
  ],
  baris: [
    {
      type: "link",
      label: "🕊️ Barışma Teklifi Kodları klasörü",
      url: "https://drive.google.com/drive/folders/1CCme3ayOphEGaF6IpiNt4gX77DTn-vf8"
    }
  ],
  cikmamesaji: [
    {
      type: "link",
      label: "💌 Çıkma Mesajı klasörü",
      url: "https://drive.google.com/drive/folders/1cdtE40DEu1jj7OF0aL0gX0xHueQD6L2b"
    }
  ],
  ozur: [
    {
      type: "link",
      label: "😔 Özür Mesajı klasörü",
      url: "https://drive.google.com/drive/folders/11J4PqDPq8KVAuFWmNV4ru-WYC54jTYzL"
    }
  ],
  matrix: [
    {
      type: "link",
      label: "🧪 Matrix Kod klasörü",
      url: "https://drive.google.com/drive/folders/1VF9_Xn5JbU5yX7Y_GdOSKU-V9tjKjsSW"
    }
  ],
    site: [
    {
      type: "link",
      label: "💻 Sitemin Kodları",
      url: "https://drive.google.com/drive/folders/1x6d9A-CpPLR5Cscpaa6uvoCXA7brLwfi"
    }
  ]
};

function loadCategory(key) {
  const container = document.getElementById("code-list");
  container.innerHTML = "";

  kodlar[key].forEach(item => {
    if (item.type === "link") {
      const link = document.createElement("a");
      link.href = item.url;
      link.textContent = item.label;
      link.target = "_blank";
      link.className = "code-link";
      container.appendChild(link);
    }
  });
}
