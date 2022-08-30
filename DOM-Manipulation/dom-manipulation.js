const domById = document.getElementById('grandparent-id')
const domByClass = document.getElementsByClassName('grandparent-class')


const domByQuerySelector = document.querySelector('.grandparent-class') // Seleciona apenas o primeiro elemento que possui o seletor determinado.
const domByQuerySelectorAll = document.querySelectorAll('.parent-class') // Seleciona todos os elementos que possuirem o seletor determinado.


const childrenSelector = domByQuerySelector.children   // Seleciona um elemento dentro do elemento determinado...
const childrenOne = childrenSelector[0]   // Especifica qual o index do elemento desejado.


const childOne = grandparent.querySelector('.child')   // Seleciona o primeiro elemento que possui o seletor especificado dentro de um determinado elemento.
const childOnee = grandparent.querySelectorAll('.child')   // Seleciona todos os elementos que possuem o seletor especificado dentro de um determinado elemento.


const children = document.querySelector('.child')
const parent = children.parentElement   // Seleciona o elemento acima de um determinado elemento que possui o seletor especificado.
const grandparent = parent.parentElement

const grandparentUp = children.closest('.grandparent-class')   // Funciona semelhantemente ao QuerySelector, entretanto, o Closest faz sua busca de baixo pra cima, o contrário do QuerySelector que faz de cima pra baixo.

const childrenTwo = children.nextElementSibling   // Seleciona o elemento posterior ao elemento determinado.
const childrenThree = children.previousElementSibling   // Seleciona o elemento anterior ao elemento determinado.