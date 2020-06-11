const html = /* html */ `
<footer>
  <div class="links row">
    <div class="col">
      <div class="footer-heading">Social</div>
      <div class="link-container">
        <a href="https://github.com/abelljs">GitHub</a>
        <a href="https://twitter.com/AbellLand">Twitter @AbellLand</a>
      </div>
      <div class="footer-heading">Channels</div>
      <div class="link-container">
        <a href="https://join.slack.com/t/abellland/shared_invite/zt-ebklbe8h-FhRgHxNbuO_hvFDf~nZtGQ">
          Slack <small>&#x2197;</small>
        </a>
        <a href="https://github.com/abelljs/abell/issues">GitHub Issues <small>&#x2197;</small></a>
      </div>
    </div>
    <div class="col">
      <div class="footer-heading">Repositories</div>
      <div class="link-container">
        <a href="https://github.com/abelljs">abelljs/abell</a>
        <a href="https://github.com/abelljs">abelljs/abell-renderer</a>
        <a href="https://github.com/abelljs">abelljs/abell-website</a>
        <a href="https://github.com/abelljs">abelljs/create-abell-app</a>
      </div>
    </div>
  </div>
  <div class="copyright-container">
    Copyright © <span id="footer-year"></span> <a href="https://github.com/abelljs/abell">Abell</a>.
  </div>
</footer>
`;

const css = /* css */ `
  .copyright-container {
    padding: 20px 50px;
    text-align: right;
  }
  .links {
    padding: 40px 100px;
  }
  .links > .col a {
    display: block;
    padding: 2px 0px;
    font-size: 13pt;
    color: var(--font-color);
  }
  .footer-heading {
    padding: 13px 0px 5px 0px;
    font-size: 11pt;
    color: var(--abell-primary);
  }
  .links .col {
    padding: 20px;
  }
  footer {
    background-color: var(--footer-background);
  }

  @media (max-width: 768px) {
    .links {
      padding: 20px 10px;
    }
    .links > .col a {
      padding: 5px 0px;
    }
  }
`

module.exports = {html, css};
