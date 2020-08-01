function abellHighlighter() {
  "use strict";
  return function (e) {
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
  };
}

module.exports = { abellHighlighter }