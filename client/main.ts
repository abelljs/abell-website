import '@fontsource/inter/variable.css';
import 'highlight.js/styles/github.css';

const editorFileExplorerButtons: NodeListOf<HTMLButtonElement> = document.querySelectorAll('.editor li button');

editorFileExplorerButtons.forEach((fileExplorerButton) => {
  fileExplorerButton.addEventListener('click', () => {
    const filename = fileExplorerButton.dataset.filename;
    document.querySelector('.editor li button.active')?.classList.remove('active');
    fileExplorerButton.classList.add('active');
    document.querySelector('.editor .code-display div.show')?.classList.remove('show');
    document.querySelector(`.editor .code-display div.file-${filename}`)?.classList.add('show');
  })
})