const DarkModeToggle = require('./DarkModeToggle.js');

const TopNavigationHTML = (navigationPath, prefixPath) => /* html */ `
  <header>
    <nav class="top-nav shadow">
      <div style="background-color: #111; font-size: 10pt; color: #fff;padding: 5px 10px;text-align: center;">
        Abell is currently unstable (v0.3.x) and should not be used for serious projects.
      </div>
      <a class="brand nav-item" style="font-size: 15pt;font-weight: bold; color: var(--font-color); padding: 17.5px 20px;" href="${prefixPath}/">
        <img alt="Abell logo" src="../favicon.ico" width="30" />
        <span style="position: relative; top: -5px;left: 3px;">Abell</span>
      </a>
      <div style="display: inline-block; float: right;">
        <a class="nav-item hide-mobile ${navigationPath ? '' : 'active'}" href="${prefixPath}/" replace>Home</a>
        <a class="nav-item hide-mobile ${navigationPath ? 'active': ''}" href="${prefixPath}/getting-started/" replace>Docs</a>
        <a class="nav-item hide-mobile" href="https://github.com/abelljs/abell">GitHub 	&#x2197;</a>
        <button 
          aria-label="Open Navigation Bar"
          aria-pressed="false"
          class="nav-item hide-pc"
          onclick="((_this) => {
            const sideNav = document.querySelector('.side-nav');
            if (sideNav.classList.contains('show')) {
              sideNav.classList.remove('show');
              _this.setAttribute('aria-label', 'Open Navigation Bar');
              _this.setAttribute('aria-pressed', 'false')
              _this.innerText = '&#9776;'
            } else {
              sideNav.classList.add('show');
              _this.setAttribute('aria-label', 'Close Navigation Bar');
              _this.setAttribute('aria-pressed', 'true');
              _this.innerText = '&times;'
            }
          })(this)"
          style="padding: 25px; background: transparent; border: none;font-size: 13pt;"
        >&#9776;</button>
        ${DarkModeToggle.html({classes: 'hide-mobile'})}
      </div>
    </nav>
  </header>
`;


const SideNavigationHTML = ($contentArray, navigationPath, prefixPath) => /* html */ `
  <nav class="side-nav ${navigationPath || 'index'} side-nav-styles">
  <div class="side-nav-items-container">
  ${ 
    $contentArray
      .sort((a, b) => a.pageNum - b.pageNum)
      .map(meta => /* html */ `
      <a class="nav-item ${meta.$path === navigationPath ? 'active': ''}" href="${prefixPath}/${meta.$path}/">${meta.title}</a>
      ${ 
        meta.sublinks && meta.sublinks.length > 0 && navigationPath !== ''
        ? `<div class="submenu" style="display: ${meta.$path === navigationPath ? 'block': 'none'}">
          ${
            meta.sublinks
              .map(sublink => `<a href="${prefixPath}/${meta.$path}/${sublink.path}">${sublink.title}</a>`)
              .join('')
          }
        </div>
        `
        : ''
      }
    `).join('')
  }
  </div>
  <div class="hide-pc mobile-top-nav-items">
    <a class="nav-item ${navigationPath ? '' : 'active'}" href="${prefixPath}/">Home</a>
    <a class="nav-item" href="${prefixPath}/getting-started/">Docs</a>
    <a class="nav-item" href="https://github.com/abelljs/abell">GitHub 	&#x2197;</a>
    <div class="mobile-top-nav-dark-mode-container" style="text-align: right;">
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
  margin-top: 90px;
  padding-top: 50px;
  z-index: 9999;
  background-color: var(--side-nav-background);
}

nav.side-nav .nav-item {
  display: block;
  padding: 10px 30px;
  color: var(--font-color);
  font-size: 13pt;
}

.submenu a {
  color: var(--font-color);
  padding: 2px 0px;
  padding-left: 35px;
  display: block;
  opacity: 1;
}

.submenu a:before {
  content: '- ';
}
.submenu a:hover:before {
  content: '- ';
  font-weight: bold;
  color: var(--abell-primary);
}

nav.side-nav .nav-item.active {
  font-weight: bold;
}

nav.top-nav {
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  font-size: 13pt;
  background-color: var(--elevation-background);
  z-index: 10000;
  padding: 0px 0px;
}
nav.top-nav .nav-item {
  padding: 25px 20px;
  display: inline-block;
  color: var(--font-color);
  border-bottom: 2px solid var(--elevation-background);
}
nav.top-nav .nav-item:hover {
  border-bottom: 2px solid var(--link-color);
  transition: border-bottom .2s ease;
}
nav.top-nav .active {
  border-bottom: 2px solid var(--link-color);
}
.mobile-top-nav-items {
  border-top: 1px solid #ddd;
  height: 290px;
  position: absolute;
  padding-top: 10px;
  bottom: 0px;
  width: 100%;
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
  .side-nav-items-container {
    overflow-y: scroll;
    height: calc(100% - 310px);
  }
  nav.index.side-nav .mobile-top-nav-items {
    top: 50px;
    border-top: none;
    bottom: unset;
    height: calc(100% - 140px);
  }
  nav.index.side-nav .mobile-top-nav-dark-mode-container {
    position: absolute;
    bottom: 0px;
    width: 100%;
  }
}
`

module.exports = {
  TopNavigationHTML,
  NavigationCSS,
  SideNavigationHTML
}