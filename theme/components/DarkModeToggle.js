const html = /* html */`
  <label class="dark-mode-toggle switch-toggle outer">
    <span style="display:inline-block;padding:1px 3px">🌙 &nbsp; ☀️</span>
    <input id="dark-mode-toggle" type="checkbox">
    <div></div>
  </label>
`;

const css = /* css */`


/* DARK MODE SWITCH */
.switch-toggle {
  position: relative;
  float: right;
  right: 0px;
  display: block;
  cursor: pointer;
	width: 60px;
	height: 28px;
	border-radius: 25px;
	background-color: var(--code-background);
}

.switch-toggle input {
  opacity: 0;
}

.switch-toggle input:focus + div {
  border: 2px solid #09f;
}

.switch-toggle div {
	position: absolute;
	border-radius: 50%;
	background-color: #DFDFDF;
	transition: .1s ease;
}

.switch-toggle input:checked + div {
	left: 50%;
	background-color: #aaa;
}

.switch-toggle.rect {
	border-radius: 0;
}

.switch-toggle.rect div {
	border-radius: 0;
}

.switch-toggle.inner div {
	width: 18px;
	height: 18px;
	top: 1px;
	left: 1px;
	
}

.switch-toggle.outer div {
	width: 29px;
	height: 29px;
	top: -0px;
	left: -1.5px;
	
}
`

const inlinedJS = `
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
  });
`

module.exports = {html, css, inlinedJS};