function setInitialTheme() {
  const localPreference = window.localStorage.getItem('prefers-theme');
  if(localPreference) {
    document.body.classList.add(localPreference);
    if(localPreference === 'dark-mode') {
      document.querySelector('#dark-mode-toggle').checked = true;
    }else{
      document.querySelector('#dark-mode-toggle').checked = false;
    }
  }
}

setInitialTheme();

document.querySelector('#dark-mode-toggle')
  .addEventListener('change', e => {
    const isDarkMode = e.target.checked;
    if(isDarkMode) {
      document.body.classList.add('dark-mode');
      window.localStorage.setItem('prefers-theme', 'dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      window.localStorage.setItem('prefers-theme', 'light-mode');
    }
  })
