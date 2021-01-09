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

// check if user is tabbing (a11y)
window.addEventListener('keydown', e => e.keyCode === 9 && (document.body.classList.add("user-is-tabbing")));