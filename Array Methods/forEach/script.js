const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// No método forEach não é possível fazer o return de algo, ou salvar esse return em uma variável. Nesse caso, o return sempre será undefined
const forEachArray = array.forEach(item => {
    return item * 5
})

console.log(forEachArray)