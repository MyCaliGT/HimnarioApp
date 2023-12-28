let himnoInput = '';
const display = document.getElementById('display');

function addNumber(number) {
  himnoInput += number;
  updateDisplay();
}

function deleteNumber() {
  himnoInput = himnoInput.slice(0, -1);
  updateDisplay();
}

function searchHimno() {
  if (himnoInput === '') {
    alert('Ingresa un número');
  } else if (himnoInput === '0') {
    alert('Himno no encontrado');
  } else {
    const himnoNumber = parseInt(himnoInput, 10);
    if (isNaN(himnoNumber) || himnoNumber < 1 || himnoNumber > 400) {
      alert('Ingresa un número válido entre 1 y 400');
    } else {
      const url = `/hymns/himno${himnoInput}.html`;
      window.location.href = url;
    }
  }
}

function updateDisplay() {
  display.innerText = himnoInput;
}
