const counterValue = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let currentResult = 0;
const increment = () => {
    (counterValue.textContent = currentResult += 1);
};
const decrement = () => {
    (counterValue.textContent = currentResult -= 1);
};
decrementBtn.addEventListener('click', decrement);
incrementBtn.addEventListener('click', increment);