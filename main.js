const toggleButton = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');
toggleButton.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});