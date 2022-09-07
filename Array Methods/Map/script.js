const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// O método map só é utilizado caso necessário transformar uma array em uma outra array com novas informações. O map sempre fará um array do mesmo tamanho que a anterior
const newArray = array.map(item => {
    if (item <= 5) {
        return item * 10
    }

    return item
})

console.log(array)
console.log(newArray)