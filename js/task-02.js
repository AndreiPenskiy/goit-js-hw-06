const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainer = [];


ingredients.map(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  ingredientsContainer.push(ingredientsEl);
});

document.querySelector('#ingredients').append(...ingredientsContainer);