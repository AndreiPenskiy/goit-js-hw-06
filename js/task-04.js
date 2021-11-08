const decreaseBtn = document.querySelector('button[data-action="decrement"]');

const increaseBtn = document.querySelector('button[data-action="increment"]');

const value = document.querySelector('#value');

let counterValue = 0;

decreaseBtn.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;
})

increaseBtn.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
})