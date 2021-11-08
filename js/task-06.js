const inputVal = document.querySelector('#validation-input');
const inputValLength = parseInt(inputVal.dataset.length);

inputVal.addEventListener("blur", inputCheck);

function inputCheck() {
    if (inputVal.value.length === inputValLength) {
        inputVal.classList.add("valid");
        inputVal.classList.replace("invalid", "valid");
    } else {
        inputVal.classList.add("invalid");
inputVal.classList.replace("valid", "invalid");
    }
};  
