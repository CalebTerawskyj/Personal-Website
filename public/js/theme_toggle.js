const button = document.getElementById('theme-toggle');
const root = document.documentElement;

function applyTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
    button.textContent = '☀️';
  } else {
    root.classList.remove('dark');
    button.textContent = '🌑';
  }
}

const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  applyTheme(savedTheme);
} else {

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  applyTheme(prefersDark ? 'dark' : 'light');
}

button.addEventListener('click', () => {
  if (root.classList.contains('dark')) {
    applyTheme('light');
    localStorage.setItem('theme', 'light');
  } else {
    applyTheme('dark');
    localStorage.setItem('theme', 'dark');
  }
});
