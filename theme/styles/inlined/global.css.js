module.exports = /* css */`
body {
  --background-primary: #fff;
  --side-nav-background: #f3f3f3;
  --font-color-primary: #333;
  --elevation-background: #fff;
  --code-background: #f3f3f3;
  --footer-background: #f9f9f9;
  --link-color: #006EB8;
  --font-family-primary: 'Roboto Condensed', sans-serif;
  --abell-primary: #3354ea;
}

body.dark {
  --background-primary: #121212;
  --font-color-primary: #ccc; 
  --elevation-background: #1D1D1D;
  --code-background: #222;
  --footer-background: #0f0f0f;
  --side-nav-background: #0f0f0f;
  --link-color: #09f;
}

html, body{
  margin: 0px;
  padding: 0px;
  width: 100%;
  overflow-x: hidden;
}

body{
  background-color: var(--background-primary);
  font-family: var(--font-family-primary);
  color: var(--font-color-primary);
  font-size: 13pt;
}

h1, h2, h3, h4, h5, h6{
  font-family: var(--font-family-primary);
  color: var(--font-color-primary);
}
*{
  box-sizing: border-box;
}
a{
  text-decoration: none;
  color: var(--link-color);
}
.shadow{
  box-shadow: 0 5px 20px -4px #0005;
}

.github-contribute-button{
  padding: 10px 20px;
  border-radius: 10px;
  color: var(--font-color);
  background-color: var(--elevation-background);
}
body.dark .github-contribute-button > img {
  filter: invert(100);
}
a.button {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  border-radius: 4px;
}
.primary-bg {
  background-color: var(--abell-primary);
}

.row {
  display: flex;
}
.row > .col {
  flex: 1;
}
.row > div {
  padding-right: 15px;
}


code{
  background-color: var(--code-background);
  padding: 3px 8px;
  border-radius: 4px;
  word-spacing: 3px;
  font-size: smaller;
  font-family: var(--font-family-primary);
}

code.hljs {
  padding: 20px;
  font-size: unset;
}


@media (max-width: 768px) {
  .hide-mobile {
    display: none !important;
  }
  .row.row-responsive {
    display: block;
  }
}

@media (min-width: 768px) {
  .hide-pc {
    display: none !important;
  }
}
`;