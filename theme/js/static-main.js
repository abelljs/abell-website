// When important links are done loading, we show the content.
if (hljs) {
  hljs.initHighlightingOnLoad();
}
    
window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));
document.querySelector('#footer-year').innerHTML = new Date().getFullYear();