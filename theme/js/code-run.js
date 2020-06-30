function setOutput() {
  const codeToExecute = document.querySelector('#code-to-run').innerText;
  document.querySelector('#html-output').innerText = 'Executing code...';
  fetch('https:///abell-renderer-api.netlify.app/.netlify/functions/renderer', {
    method: 'POST',
    body: codeToExecute
  })
    .then(res => res.text())
    .then(res => {
      document.querySelector('#html-output').innerText = res.replace(/\n\n/g, '\n');
      hljs.highlightBlock(document.querySelector('#html-output'));
    })
}

document.querySelector('#run-code').addEventListener('click', setOutput);
setOutput();
