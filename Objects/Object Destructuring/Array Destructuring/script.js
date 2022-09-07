// Também é possível fazer a desestruturação de arrays e, além disso, aplicar o rest operator
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//const [first, sec, third, fourth, ...rest] = array

// É possível ignorar um elemento da array...
const [first, , third, fourth, ...rest] = array
// ... deixando vazio entre as vírgulas
console.log(rest)