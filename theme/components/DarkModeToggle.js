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

module.exports = {html, css};