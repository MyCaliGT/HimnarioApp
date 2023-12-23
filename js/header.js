// JavaScript para cargar el contenido del navbar
document.addEventListener("DOMContentLoaded", function () {
  fetch("../layouts/header.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("body").insertAdjacentHTML("afterbegin", data);

      // Después de insertar el contenido del navbar, configurar los eventos
      setupNavbarEvents();
    });
});

// Función para configurar los eventos del navbar
function setupNavbarEvents() {
  /*================= menu icon navbar =================*/
  let menuIcon = document.querySelector('#menu-icon');
  let navbar = document.querySelector('.navbar');

  if (menuIcon) {
    menuIcon.onclick = () => {
      menuIcon.classList.toggle('bx-x');
      navbar.classList.toggle('active');
    }
  }

  /*================= dark light mode =================*/
  let darkModeIcon = document.querySelector('#darkMode-icon');

  if (darkModeIcon) {
    darkModeIcon.onclick = () => {
      darkModeIcon.classList.toggle('bx-sun');
      darkModeIcon.classList.toggle('bx-moon');
      document.body.classList.toggle('dark-mode');
    }
  }
}
