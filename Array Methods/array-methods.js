const ITEMS = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   }
]

// Filter - Cria uma nova array com todos os elementos de uma outra array específica que passem no teste.
const FILTER_ITEMS = ITEMS.filter((item) => {
    return item.price <= 20
})

// Map - Cria uma nova array com uma função para todos os elementos de uma determinada array.
const MAP_ITEMS = ITEMS.map((item) => {
    return item.price
})

// Find - Retorna o valor do primeiro elemento de uma determinada array que passar no teste.
const FIND_ITEM = ITEMS.find((item) => {
    return item.name === 'Album'
})

ITEMS.forEach((item) => {
    //console.log(item.price)
})

// Some - Checa se algum dos elementos de uma determinada array passam no teste.
const SOME_ITEM = ITEMS.some((item) => {
    return item.price > 1000
})

// Every - Checa se todos os elementos de uma determinada array passam no teste.
const EVERY_ITEM = ITEMS.every((item) => {
    return item.price > 0
})

// Reduce - Reduz todos os valores de uma array para um único valor.
const REDUCE_ITEM = ITEMS.reduce((current, item) => {
    return item.price + current
}, 0)

// Pop - Remove o último elemento de uma determinada array.
let removeLastItem = ITEMS.pop()

// Push - Adiciona um novo elemento na última posição em uma determinada array.
ITEMS.push({ name: "Fruit", price: 0.50 })