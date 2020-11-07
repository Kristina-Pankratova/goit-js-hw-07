const inputEl = document.querySelector('#name-input');
const outputEl = document.querySelector('#name-output');
console.log(inputEl);
console.log(outputEl);
inputEl.addEventListener(
  'input',
  () =>
    (outputEl.textContent =
      inputEl.value.length > 0 ? inputEl.value : 'незнакомец')
);