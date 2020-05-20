function DarkMode() {
  return /* html */`
  <label class="dark-mode-toggle switch-toggle outer">
    <span style="display:inline-block;padding:1px 3px">🌙 &nbsp; ☀️</span>
    <input id="dark-mode-toggle" type="checkbox">
    <div></div>
  </label>
  `
}

module.exports = DarkMode;