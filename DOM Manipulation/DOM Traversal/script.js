let list = document.querySelector('#list')
let radioBtns = document.querySelectorAll('.radio')
let btn = document.querySelector('.btn')
let firstChild = document.querySelector('#first-child')
let secChild = document.querySelector('#sec-child')
let thirdChild = document.querySelector('#third-child')
let fourthChild = document.querySelector('#fourth-child')

let returnSecChildClosestElement = secChild.closest('.list-child').textContent
console.log(returnSecChildClosestElement)

let returnThirdChildSibling = thirdChild.nextElementSibling.textContent
console.log(returnThirdChildSibling)

let returnSecChildPreviousSibling = secChild.previousElementSibling.textContent
console.log(returnSecChildPreviousSibling)

let returnFirstChildParent = firstChild.parentElement.id
console.log(returnFirstChildParent)

let returnListChildren = list.children[0].id
console.log(returnListChildren)

let returnListFirstChild = list.firstChild
console.log(returnListFirstChild)

let returnListLastChild = list.lastChild
console.log(returnListLastChild)