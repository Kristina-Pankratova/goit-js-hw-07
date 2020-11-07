const inputValidation = document.querySelector('#validation-input');

inputValidation.addEventListener('blur', inputFocusLost)

function inputFocusLost() {
    if (inputValidation.value.length > inputValidation.dataset.length) {
        
      inputValidation.classList.add("invalid");  
    } else {
        inputValidation.classList.remove("invalid");
        inputValidation.classList.add("valid");
    }
}