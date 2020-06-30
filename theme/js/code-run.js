document.querySelector('#run-code').addEventListener('click', e => {
  const codeToExecute = document.querySelector('#code-to-run').innerText;
  fetch('https:///abell-renderer-api.netlify.app/.netlify/functions/renderer', {
    method: 'POST',
    body: codeToExecute
  })
    .then(res => res.text())
    .then(res => {
      document.querySelector('#html-output').innerText = res.replace(/\n\n/g, '\n');
    })
})
