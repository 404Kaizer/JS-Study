// O createElement cria um elemento baseado na tag determinada

let list = document.querySelector('#list')
let addBtn = document.querySelector('.add-btn')
let userInput = document.querySelector('.user-input')
let counter = 0

addBtn.addEventListener('click', (e) => {
    e.preventDefault()
    userInput.focus()
    counter++
    getUserInput()
})

const getUserInput = () => {
    let userInputValue = userInput.value
    createNewElement(userInputValue)
}

const createNewElement = (userInputValue) => {
    let newElement = document.createElement('li')
    newElement.textContent = userInputValue
    insertElementBefore(newElement)
}

const insertElementBefore = (newElement) => {
    list.insertBefore(newElement, list.previousElementSibling)
    clearUserInputField()
}

const clearUserInputField = () => {
    userInput.value = ''
}