let list = document.querySelector('#list')
let addBtn = document.querySelector('.add-btn')
let counter = 5

addBtn.addEventListener('click', () => {
    counter++
    createListElement()
})

let createListElement = () => {
    let newListChild = document.createElement('li')
    newListChild.textContent = `${counter}° Content`
    addListElement(newListChild)
}

let addListElement = (newListChild) => {
    list.insertBefore(newListChild, list.lastChild)
}