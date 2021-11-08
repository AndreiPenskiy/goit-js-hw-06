const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const ingredientsContainer = document.querySelector('#ingredients');


ingredients.forEach(ingredient => {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = ingredient;
  ingredientsEl.classList.add('item');
  ingredientsContainer.append(ingredientsEl);
});