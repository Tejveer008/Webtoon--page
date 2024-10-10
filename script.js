const burgerMenu = document.getElementById('burger-menu');
const navLinks = document.querySelector('nav ul');

burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active'); // Toggles burger animation
  navLinks.classList.toggle('active'); // Toggles navigation links
});
