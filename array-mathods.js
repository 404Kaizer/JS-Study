const ITEMS = [
    { name: 'Bike',     price: 100  },
    { name: 'TV',       price: 200  },
    { name: 'Album',    price: 10   },
    { name: 'Book',     price: 5    },
    { name: 'Phone',    price: 500  },
    { name: 'Computer', price: 1000 },
    { name: 'Keyboard', price: 25   }
]

// Filter - Esse método filtra e retorna, de uma array, valores de itens especifidos
const FILTER_ITEMS = ITEMS.filter((item) => {
    return item.price <= 20
})

// Map
const MAP_ITEMS = ITEMS.map((item) => {
    return item.price
})

// Find
const FIND_ITEM = ITEMS.find((item) => {
    return item.name === 'Album'
})

ITEMS.forEach((item) => {
    //console.log(item.price)
})

// Some
const SOME_ITEM = ITEMS.some((item) => {
    return item.price > 1000
})

// Every
const EVERY_ITEM = ITEMS.every((item) => {
    return item.price > 0
})

// Reduce
const REDUCE_ITEM = ITEMS.reduce((current, item) => {
    return item.price + current
}, 0)
