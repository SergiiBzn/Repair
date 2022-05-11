const squareInput = document.querySelector('#square-input');
const squareRange = document.querySelector('#square-range');
const inputs = document.querySelectorAll('input');

const radioType = document.querySelectorAll('input[name="type"]');
const radioBuilding = document.querySelectorAll('input[name="building"]');
const radioRooms = document.querySelectorAll('input[name="rooms"]');

const ceiling = document.querySelector('input[name="ceiling"]');
const walls = document.querySelector('input[name="walls"]');
const floor = document.querySelector('input[name="floor"]');

const basePrice = 10500;
const totalPriceElement = document.querySelector('#total-price');

squareRange.addEventListener('input', () => {
  squareInput.value = squareRange.value;
});

squareInput.addEventListener('input', () => {
  squareRange.value = squareInput.value;
});

function calculate() {
  let totalPrice = basePrice * parseInt(squareInput.value);

  radioType.forEach((radio) => {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  });

  radioBuilding.forEach((radio) => {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  });

  radioRooms.forEach((radio) => {
    if (radio.checked === true) {
      totalPrice *= parseFloat(radio.value);
    }
  });

  if (ceiling.checked) {
    parseFloat((totalPrice *= ceiling.value));
  }

  if (walls.checked) {
    parseFloat((totalPrice *= walls.value));
  }

  if (floor.checked) {
    parseFloat((totalPrice *= floor.value));
  }

  const formatter = new Intl.NumberFormat('ua');

  totalPriceElement.innerText = formatter.format(totalPrice);
}

calculate();

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    calculate();
  });
});
