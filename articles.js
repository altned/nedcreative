const articles = [
  {
    title: "AI Mengubah Cara Developer Bekerja",
    image: "assets/articles/ai1.svg",
    content:
      "Kecerdasan buatan kini membantu developer menulis kode dengan lebih cepat. Tools seperti asisten kode memberikan saran otomatis yang mempercepat proses pengembangan. Integrasi AI dalam IDE juga meningkatkan kualitas hasil akhir."
  },
  {
    title: "Framework Populer untuk Membangun Aplikasi AI",
    image: "assets/articles/ai2.svg",
    content:
      "TensorFlow dan PyTorch menjadi pilihan utama dalam pengembangan AI. Keduanya menyediakan ekosistem luas dan komunitas yang aktif. Developer dapat memanfaatkan library ini untuk membangun model machine learning dengan efisien."
  },
  {
    title: "Etika Pengembangan AI dalam Dunia Developer",
    image: "assets/articles/ai3.svg",
    content:
      "Penggunaan AI menimbulkan pertanyaan etis tentang privasi dan bias algoritma. Developer perlu memastikan data yang digunakan bersih dan representatif. Transparansi dalam pengambilan keputusan AI menjadi kunci kepercayaan pengguna."
  },
  {
    title: "Masa Depan Karier Developer di Era AI",
    image: "assets/articles/ai4.svg",
    content:
      "Otomasi yang didukung AI memunculkan kekhawatiran akan hilangnya pekerjaan. Namun, AI justru membuka peran baru seperti machine learning engineer dan data scientist. Developer yang terus belajar akan tetap relevan."
  }
];

function excerpt(text, length = 120) {
  return text.length > length ? text.substring(0, length) + "..." : text;
}

function renderPublicArticles() {
  const container = document.getElementById("publicArticles");
  if (!container) return;
  articles.forEach((a) => {
    const article = document.createElement("article");
    article.innerHTML = `
      <img src="${a.image}" alt="${a.title}" class="feature-image"/>
      <h3>${a.title}</h3>
      <p>${excerpt(a.content)}</p>
    `;
    container.appendChild(article);
  });
}

document.addEventListener("DOMContentLoaded", renderPublicArticles);
