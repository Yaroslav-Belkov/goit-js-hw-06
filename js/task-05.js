// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), 
// підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const inputNameElements = document.querySelector('#name-input')
const outputNameElemets = document.querySelector('#name-output')
console.log(inputNameElements)
console.log(outputNameElemets)

inputNameElements.addEventListener('input', onformInput);

function onformInput(event){
    if(event.currentTarget.value === ''){
        outputNameElemets.textContent = 'Anonymous'
    }
    else {
        outputNameElemets.textContent = event.currentTarget.value
    }
}