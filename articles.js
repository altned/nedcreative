const STORAGE_KEY = 'articles';

function getArticles() {
  return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
}

function saveArticles(articles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(articles));
}

function excerpt(text, length = 100) {
  return text.length > length ? text.substring(0, length) + '...' : text;
}

function renderPublicArticles() {
  const container = document.getElementById('publicArticles');
  if (!container) return;
  const articles = getArticles();
  if (articles.length === 0) {
    container.innerHTML = '<p>Belum ada artikel.</p>';
    return;
  }
  const ul = document.createElement('ul');
  articles.forEach((a) => {
    const li = document.createElement('li');
    li.innerHTML = `<h3>${a.title}</h3><p>${excerpt(a.content)}</p>`;
    ul.appendChild(li);
  });
  container.appendChild(ul);
}

document.addEventListener('DOMContentLoaded', renderPublicArticles);
