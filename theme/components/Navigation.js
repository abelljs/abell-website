const DarkModeToggle = require('./DarkModeToggle.js');

const TopNavigationHTML = (navigationPath, globalMeta) => /* html */ `
  <header>
    <nav class="top-nav shadow">
      <a class="brand nav-item" style="font-size: 15pt;font-weight: bold; color: var(--font-color); padding: 17px 20px;" href="${ globalMeta.domain }">
        <img src="../favicon.ico" width="30" />
        <span style="position: relative; top: -5px;left: 3px;">Abell</span>
      </a>
      <div style="display: inline-block; float: right;">
        <a class="nav-item hide-mobile ${navigationPath ? '' : 'active'}" href="${globalMeta.domain}">Home</a>
        <a class="nav-item hide-mobile" href="${globalMeta.domain}/getting-started/">Docs</a>
        <a class="nav-item hide-mobile" href="https://github.com/abelljs/abell">GitHub 	&#x2197;</a>
        <button 
          class="nav-item hide-pc"
          onclick="document.querySelector('.side-nav').classList.toggle('show')"
          style="padding: 25px; background: transparent; border: none;font-size: 13pt;"
        >&#9776;</button>
        ${DarkModeToggle.html({classes: 'hide-mobile'})}
      </div>
    </nav>
  </header>
`;


const SideNavigationHTML = ($contentArray, navigationPath, globalMeta) => /* html */ `
  <nav class="side-nav side-nav-styles">
  ${ 
    $contentArray.map(meta => /* html */ `
      <a class="nav-item ${meta.$path === navigationPath ? 'active': ''}" href="${globalMeta.domain}/${meta.$path}/">${meta.title}</a>
    `).join('')
  }
  <div class="hide-pc">
    <br/><br/>
    <hr/>
    <a class="nav-item ${navigationPath ? '' : 'active'}" href="${globalMeta.domain}">Home</a>
    <a class="nav-item" href="${globalMeta.domain}/getting-started/">Docs</a>
    <a class="nav-item" href="https://github.com/abelljs/abell">GitHub 	&#x2197;</a>
    <div style="position: absolute;bottom:70px;right: 0px;">
      ${DarkModeToggle.html()}
    </div>
  </div>
  </nav>
`

const NavigationCSS = /* css */`
.side-nav-styles {
  display: inline-block;
  width: 350px;
  height: 100%;
}
nav.side-nav {
  position: fixed;
  right: 0px; top: 0px;
  margin-top: 70px;
  padding-top: 50px;
  background-color: var(--side-nav-background);
}

nav.side-nav .nav-item {
  display: block;
  padding: 10px 30px;
  color: var(--font-color);
}

nav.side-nav .nav-item.active {
  font-weight: bold;
}

nav.top-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  background-color: var(--elevation-background);
  z-index: 1;
  padding: 0px 10px;
}
nav.top-nav .nav-item {
  padding: 23px 20px;
  display: inline-block;
  color: var(--font-color);
  border-bottom: 2px solid var(--elevation-background);
}
nav.top-nav .nav-item:hover {
  border-bottom: 2px solid var(--link-color);
  transition: border-bottom .2s ease;
}

@media (max-width: 768px) {
  nav.side-nav {
    right: -100%;
    transition: right .1s ease;
  }
  .side-nav-styles {
    width: 250px;
  }
  nav.side-nav.show {
    right: 0px;
    transition: right .2s ease;
  }
  nav.top-nav {
    padding: 0px;
  }
}
`

module.exports = {
  TopNavigationHTML,
  NavigationCSS,
  SideNavigationHTML
}