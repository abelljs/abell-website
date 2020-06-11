window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));
document.querySelector('#footer-year').innerHTML = new Date().getFullYear();
try {
  hljs.initHighlightingOnLoad();
} catch(err) {
  console.log("Current page does not support code highlighting");
}

if (document.body.classList.contains('index')) {
  // Index JavaScript
  (async () => {
    const contributorsArray = await Promise.all([
      fetch('https://api.github.com/repos/abelljs/abell/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-renderer/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-website/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/abell-starter-minima/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/create-abell-app/contributors').then(res => res.json()),
      fetch('https://api.github.com/repos/abelljs/vscode-abell-language-features/contributors').then(res => res.json())
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