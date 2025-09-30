async function loadHTML(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(`Could not load ${file}`);
    const text = await res.text();
    document.getElementById(id).innerHTML = text;
  } catch (err) {
    console.error(err);
    document.getElementById(id).innerHTML = `Error loading ${file}`;
  }
}

// Load all parts
window.addEventListener('DOMContentLoaded', () => {
  //loadHTML('header', 'header.html');
  loadHTML('navbar', 'partials/navbar.html');
  //loadHTML('footer', 'footer.html');
});
