// Não exite o método insertAfter, então, para isso, é utilizado o método insertBefore, adicionando o elemento ao nextSibling do firstChild do elemento pai.

let list = document.querySelector('#list')
let addBtn = document.querySelector('.add-btn')
let counter = 0

addBtn.addEventListener('click', () => {
    createListElement()
    counter++
})

let createListElement = () => {
    let newListChild = document.createElement('li')
    newListChild.textContent = `-${counter}° Content`
    addListElement(newListChild)
}

let addListElement = (newListChild) => {
    list.insertBefore(newListChild, list.firstChild.nextSibling)
}