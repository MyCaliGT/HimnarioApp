/*================= menu icon navbar =================*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}

/*================= dark light mode =================*/

let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('bx-sun')
  darkModeIcon.classList.toggle('bx-moon')
  document.body.classList.toggle('dark-mode');
}

/*================= Multiple Text =================*/

document.addEventListener('DOMContentLoaded', function () {
  const firstText = document.getElementById('firstText');
  const secondText = document.getElementById('secondText');

  function toggleText() {
      firstText.style.display = (firstText.style.display === 'none' || firstText.style.display === '') ? 'block' : 'none';
      secondText.style.display = (secondText.style.display === 'none' || secondText.style.display === '') ? 'block' : 'none';
  }

  // Mostrar el primer texto de inmediato
  firstText.style.display = 'block';

  // Configurar un intervalo para cambiar entre los textos cada 3 segundos
  setInterval(toggleText, 5000);
});