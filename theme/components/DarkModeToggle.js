const html = /* html */`
  <button onclick="toggleTheme()" class="dark-mode-toggle">
    <span class="sun"> <img width="35px" src="../icons/sun.svg" /></span>
    <span class="moon"><img width="25px" src="../icons/moon.svg" /></span>
  </button>
`;

const css = /* css */`


/* DARK MODE SWITCH */
.dark-mode-toggle {
  cursor: pointer;
  float: right;
  border:none;
  background:transparent;
}
body:not(.user-is-tabbing) .dark-mode-toggle:focus {
  outline: none;
}
.dark-mode-toggle .moon {
  padding: 10px;
}
.dark-mode-toggle .sun {
  padding: 5px;
}
body .dark-mode-toggle .moon {display: none}
body .dark-mode-toggle .sun {display: inline-block}
body.dark-mode .dark-mode-toggle .moon {display: inline-block;}
body.dark-mode .dark-mode-toggle .sun {display: none;}
`

const inlinedJS = `

function toggleTheme() {
  if (document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
    window.localStorage.setItem('prefers-theme', 'light-mode');
  } else {
    document.body.classList.add('dark-mode');
    window.localStorage.setItem('prefers-theme', 'dark-mode');
  }
}

const localPreference = window.localStorage.getItem('prefers-theme') || 'light-mode';

if(window.matchMedia('(prefers-color-scheme: dark)').matches || localPreference === 'dark-mode') {
  // If color is preferred
  document.body.classList.add('dark-mode');
} else if(localPreference === 'light-mode') {
  // If locally values are stored
  document.body.classList.remove('dark-mode');
} 


`

module.exports = {html, css, inlinedJS};