let counter = 0;
const numberElement = document.getElementById('number');

function increase() {
  counter++;
  numberElement.textContent = counter;
}

function decrease() {
  counter--;
  numberElement.textContent = counter;
}
