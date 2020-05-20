function TwitterShareButton({link}) {
  return /* html */`
  <a 
    target="_blank" 
    rel="noopener noreferer" 
    class="twitter-share-button blog dynamic-url shadow" 
    href="https://twitter.com/intent/tweet?text=${link}" 
    data-size="large"
  >
    <img width="20" style="position: relative;top:4px;" alt="Twitter Logo" src="../icons/twitter.svg"> 
    &nbsp;Share on Twitter
  </a>
  `
}

module.exports = TwitterShareButton;