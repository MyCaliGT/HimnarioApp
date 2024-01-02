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

// Función para filtrar la lista
function filtrarLista() {
  var input = document.getElementById("buscar_himno").value.toLowerCase();
  var listaElementos = document.getElementById("himnos");
  var elementos = listaElementos.getElementsByTagName("a");

  // Mostrar u ocultar elementos según el filtro
  for (var i = 0; i < elementos.length; i++) {
      var textoElemento = elementos[i].textContent.toLowerCase();
      if (textoElemento.includes(input)) {
          elementos[i].style.display = "";
      } else {
          elementos[i].style.display = "none";
      }
  }
}

function limpiarBusqueda() {
  document.getElementById("buscar_himno").value = "";
}

window.addEventListener('beforeunload', function() {
  limpiarBusqueda();
});