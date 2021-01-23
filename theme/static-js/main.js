document.querySelectorAll('.tabbed-editor').forEach(tabbedEditor => {
  const menuButtons = tabbedEditor.querySelectorAll('.menu > button');
  for (const menuButton of menuButtons) {
    menuButton.addEventListener('click', e => {
      const tabId = menuButton.dataset.editorid;
      tabbedEditor.querySelectorAll('.tabs > .active-tab').forEach(activeTab => {
        activeTab.classList.remove('active-tab');
      })

      tabbedEditor.querySelectorAll('.menu > .active').forEach(activeButton => {
        activeButton.classList.remove('active');
      })


      menuButton.classList.add('active');
      tabbedEditor.querySelector('#' + tabId).classList.add('active-tab');
    })
  }
})


if (hljs) {  
  function abellHighlighter(e) {
    return {
      name: "abell",
      aliases: ["Abell", "abell"],
      subLanguage: ["xml"],
      contains: [
        e.C_LINE_COMMENT_MODE,
        e.C_BLOCK_COMMENT_MODE,
        {
          className: "abell",
          begin: "{{",
          end: "}}",
          subLanguage: ["javascript", "xml"],
          contains: [
            {
              className: 'abell',
              begin: '/* html */ `',
              end: '`',
              subLanguage: ['xml']
            }
          ]
        },
        {
          className: "abell",
          begin: "props={",
          end: "}",
          subLanguage: ["javascript"]
        }
      ],
    };
  }

  hljs.registerLanguage('abell', abellHighlighter);
  hljs.initHighlightingOnLoad();
}

// smooth scroll to link
const anchorlinks = document.querySelectorAll('a[href*="#"]')
for (const item of anchorlinks) { 
  item.addEventListener('click', (e)=> {
    const href = item.getAttribute('href');
    const hashval = href.slice(href.lastIndexOf('#'));
    const target = document.querySelector(hashval)
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    })
    history.pushState(null, null, hashval)
    e.preventDefault();
  })
}



// On scroll change active link

function throttle(method, scope) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method.call(scope);
  }, 100);
}

const halfHeight = window.innerHeight / 2;

function onScroll() {
  const sections = Array.from(anchorlinks).filter(anchorLink => anchorLink.classList.contains('menu-item'));
  const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
  
  for (let i = 0; i < sections.length; i++) {
    try {
      const currLink = sections[i];
      const href = currLink.getAttribute('href');
      const hashval = href.slice(href.lastIndexOf('#'));
      const refElement = document.querySelector(hashval);
      if ((refElement.offsetTop - halfHeight) <= scrollPos) {
        currLink.classList.add('done');
      } else {
        currLink.classList.remove('done');
      }
    } catch (err) {}
  }
};

onScroll();
window.document.addEventListener('scroll', () => throttle(onScroll));


// check if user is tabbing (a11y)
window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));