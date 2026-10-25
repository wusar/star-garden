(() => {
  const dialog = document.querySelector('#image-dialog');
  const image = document.querySelector('#dialog-image');
  let opener;
  document.querySelectorAll('[data-image]').forEach(button => {
    button.addEventListener('click', () => {
      opener = button;
      image.src = button.dataset.image;
      if (typeof dialog.showModal === 'function') dialog.showModal();
      else window.open(button.dataset.image, '_blank', 'noopener');
    });
  });
  document.querySelector('#close-dialog').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', event => { if (event.target === dialog) dialog.close(); });
  dialog.addEventListener('close', () => opener?.focus());
})();
