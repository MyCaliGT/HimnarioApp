// JavaScript para cargar el contenido del footer
document.addEventListener("DOMContentLoaded", function () {
  fetch("/layouts/footer.html")
    .then(response => response.text())
    .then(data => {
      document.querySelector("body").insertAdjacentHTML("beforeend", data);

      // Después de insertar el contenido del footer, configurar el intervalo para cambiar el texto
      setupTextToggleInterval();
    });
});

// Función para configurar el intervalo de cambio de texto
function setupTextToggleInterval() {
  // Utilizamos setTimeout para asegurarnos de que los elementos estén disponibles
  setTimeout(function () {
    const firstText = document.getElementById('firstText');
    const secondText = document.getElementById('secondText');

    if (firstText && secondText) {
      // Mostrar el primer texto de inmediato
      firstText.style.display = 'block';

      // Configurar un intervalo para cambiar entre los textos cada 3 segundos
      setInterval(function () {
        firstText.style.display = (firstText.style.display === 'none' || firstText.style.display === '') ? 'block' : 'none';
        secondText.style.display = (secondText.style.display === 'none' || secondText.style.display === '') ? 'block' : 'none';
      }, 5000);
    }
  }, 0); // Establecemos el tiempo de espera a 0 para que se ejecute después de que se complete la ejecución actual
}