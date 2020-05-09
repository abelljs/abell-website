function setTheme(theme) {
  if(theme === 'dark-mode') {
    document.body.classList.add('dark-mode');
    window.localStorage.setItem('prefers-theme', 'dark-mode');
    document.querySelector('#dark-mode-toggle').checked = true;
  } else {
    document.body.classList.remove('dark-mode');
    window.localStorage.setItem('prefers-theme', 'light-mode');
    document.querySelector('#dark-mode-toggle').checked = false;
  }
}

const localPreference = window.localStorage.getItem('prefers-theme');
if(localPreference) {
  // If locally values are stored
  setTheme(localPreference);
} else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // If color is preferred
  setTheme('dark-mode');
}

document.querySelector('#dark-mode-toggle')
  .addEventListener('change', e => {
    const isDarkMode = e.target.checked;
    if(isDarkMode) {
      setTheme('dark-mode');
    } else {
      setTheme('light-mode');
    }
  })