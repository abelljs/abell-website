const html = /* html */`
  <button onclick="toggleTheme()" class="dark-mode-toggle nav-item">
    <span class="sun"> <img width="33px" src="../icons/sun.svg" /></span>
    <span class="moon"><img width="23px" src="../icons/moon.svg" /></span>
  </button>
`;

const css = /* css */`

/* DARK MODE SWITCH */
.dark-mode-toggle {
  cursor: pointer;
  float: right;
  border:none;
  background:transparent;
  padding: 17px 20px !important;
}
body:not(.user-is-tabbing) .dark-mode-toggle:focus {
  outline: none;
}
.dark-mode-toggle .moon {
  padding: 5px;
}
body .dark-mode-toggle .moon {display: none}
body .dark-mode-toggle .sun {display: inline-block}
body.dark .dark-mode-toggle .moon {display: inline-block;}
body.dark .dark-mode-toggle .sun {display: none;}
`

const inlinedJS = `

function toggleTheme() {
  if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    window.localStorage.setItem('prefers-theme', 'light');
  } else {
    document.body.classList.add('dark');
    window.localStorage.setItem('prefers-theme', 'dark');
  }
}

const localPreference = window.localStorage.getItem('prefers-theme') || 'light';

if(window.matchMedia('(prefers-color-scheme: dark)').matches || localPreference === 'dark') {
  // If color is preferred
  document.body.classList.add('dark');
} else if(localPreference === 'light') {
  // If locally values are stored
  document.body.classList.remove('dark');
} 


`

module.exports = {html, css, inlinedJS};