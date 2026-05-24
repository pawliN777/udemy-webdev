const storageKey = 'pipastyle-theme';

const applyTheme = (theme) => {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  localStorage.setItem(storageKey, theme);
};

const savedTheme = localStorage.getItem(storageKey);
if (savedTheme) {
  applyTheme(savedTheme);
} else {
  const systemIsDark = window.matchMedia(
    '(prefers-color-scheme: dark)',
  ).matches;
  applyTheme(systemIsDark ? 'dark' : 'light');
}

export const toggleTheme = () => {
  const currentTheme = document.documentElement.getAttribute('data-theme');

  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
};
