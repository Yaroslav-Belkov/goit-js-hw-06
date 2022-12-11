
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.


const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// 1) Варіант 
// for (let ingredient of ingredients) {
//   const ingridientsListEl = document.createElement('li')
//   ingridientsListEl.textContent = ingredient;
//   ingridientsListEl.classList.add('item')

//   console.log(ingridientsListEl)

//   const list = document.querySelector('#ingredients');
//   list.appendChild(ingridientsListEl);

// }

// 2) Варіант

// ingredients.forEach((element) => {

//   const ingridientsListEl = document.createElement('li')
//   ingridientsListEl.textContent = element;
//   ingridientsListEl.classList.add('item')

//   console.log(ingridientsListEl)

//   const listEl = document.querySelector('#ingredients');
//   listEl.appendChild(ingridientsListEl);


// })

// 3) Варіант

const listEl = document.querySelector('#ingredients')

const elements = ingredients.map(element=> {
  const ingredientItem = document.createElement('li');
  ingredientItem.classList.add('item');
  ingredientItem.textContent = element;

return ingredientItem
})

listEl.append(...elements)

console.log(listEl)