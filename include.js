async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Could not load ${file}`);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML = `<h1 style="color: red">Error loading ${file}</h1>`;
  }
}

// Load all parts
window.addEventListener('DOMContentLoaded', () => {
  loadHTML('nav', '/partials/navigation.html');
  loadHTML('landing', '/partials/landing.html');
  loadHTML('gameplay', '/partials/gameplay.html');
  loadHTML('download', '/partials/download.html');
  loadHTML('links', '/partials/links.html');
});
