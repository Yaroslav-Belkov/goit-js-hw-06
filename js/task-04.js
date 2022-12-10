// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const counterValue = {
    value: 0,
    decrement() {
        this.value -=1
    },
    increment() {
        this.value +=1
    },
}

const btnDecrement = document.querySelector('button[data-action="decrement"]')
const btnIncrement = document.querySelector('button[data-action="increment"]')
const valueElem = document.querySelector('#value')



btnDecrement.addEventListener('click', function (){
counterValue.decrement()
valueElem.textContent = counterValue.value
});

btnIncrement.addEventListener('click', function() {
    counterValue.increment();
    valueElem.textContent = counterValue.value
});




