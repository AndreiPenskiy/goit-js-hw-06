const inputText = document.querySelector('#name-input');

const changeText = document.querySelector('#name-output');

function transformText() {
    if (inputText.value === "") {
        changeText.textContent = "Anonymous"
    } else changeText.textContent = inputText.value;
}

inputText.addEventListener('input', transformText);