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

// check if user is tabbing (a11y)
window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));