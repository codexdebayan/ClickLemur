document.addEventListener('keydown', (event) => {
  // CTRL + ' to click "Run Code"
  if (event.ctrlKey &&  event.key === "'") {
    const runButton = document.querySelector('.css-18olerk');
    if (runButton) {
      runButton.click();
    }
  }

  // CTRL + Enter to click "Submit"
  if (event.ctrlKey && event.key === 'Enter') {
    const submitButton = document.querySelector('.css-5n9w05');
    if (submitButton) {
      submitButton.click();
    }
  }
});
