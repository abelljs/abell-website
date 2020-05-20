const html = /* html */`
<div class="loading-placeholder">
  <div class="strip strip-h1"></div>
  ${
    ['32%', '48%', '29%', '47%', '57%']
    .map((val, index) => /* html */`
      <p 
        class="strip strip-${index}" 
        style="width:${val};opacity:${0.9-index/10};"
      ></p>
    `)
    .join('')
  }
</div>
`;

const css = /* css */`
  .loading-placeholder {
    height: 100%;
  }
  .loading-placeholder > .strip{
    background-color: #eee;
    height: 13px;
    display: block;
    width: 70%;
    margin: 18px 0px;
    border-radius: 10px;
  }
  .loading-placeholder > .strip-h1{
    margin-top: 50px;
    height: 40px;
    margin-bottom: 40px;
  }
  @media (max-width: 768px) {
    .loading-placeholder > .strip-h1{
      height: 60%;
    }
  }
`;

module.exports = {html, css}