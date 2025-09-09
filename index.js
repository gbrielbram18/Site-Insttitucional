const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Alterar o ícone do botão
  if(document.body.classList.contains('dark')) {
    toggleButton.textContent = '☀️'; // modo escuro ativo
  } else {
    toggleButton.textContent = '🌙'; // modo claro ativo
  }
});
