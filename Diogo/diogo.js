const toggleButton = document.getElementById('theme-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark');

  // Alterna ícone
  toggleButton.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});
