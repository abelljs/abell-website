window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));

function throttle(method, scope) {
  clearTimeout(method._tId);
  method._tId= setTimeout(function(){
      method.call(scope);
  }, 100);
}

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
          subLanguage: ["javascript"]
        }
      ],
    };
  }

  hljs.registerLanguage('abell', abellHighlighter);
  hljs.initHighlightingOnLoad();
}

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


const halfHeight = window.innerHeight / 2;

function onScroll() {
  const sections = anchorlinks;
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

if (document.body.classList.contains('index')) {
  // Index JavaScript
  (async () => {
    const contributorsArray = await Promise.all([
      fetch('https://api.github.com/repos/abelljs/abell/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-renderer/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-website/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/official-plugins/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-starter-minima/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/create-abell-app/contributors').then(res => res.json())
    ])
    .then((data) => {
      const allContributors = [];
      for (const repo of data) {
        allContributors.push(...repo);
      }
      return allContributors;
    })

    const contribObj = contributorsArray.reduce((lastContrib, contributor) => {
      if (!lastContrib[contributor.login]) {
        lastContrib[contributor.login] = {
          username: contributor.login,
          image: contributor.avatar_url,
          profile: contributor.html_url,
          contributions: contributor.contributions
        };
      } else {
        lastContrib[contributor.login].contributions += contributor.contributions;
      }
      
      return lastContrib;
    }, {})

    document.querySelector('.github-contributors-holder')
      .innerHTML = Object.values(contribObj)
        .sort((a, b) => b.contributions - a.contributions)
        .map(contributor => /* html */ `
          <a title="${contributor.username}" class="contributor" href="${contributor.profile}">
            <img alt="GitHub profile picture of ${contributor.username}" width="70" src="${contributor.image}" style="border-radius: 100%;"/>
          </a>
        `).join('') ;
  })()
}