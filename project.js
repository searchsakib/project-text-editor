document.getElementById('bold').addEventListener('click', (e) => {
  if (e.target.id === 'bold') {
    boldItalicUnder('bold');
    inputAreaFunc('input-area');
  } else {
    e.target.id = 'bold';
  }
});
