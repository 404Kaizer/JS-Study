const user = {
    name: 'Hugo',
    age: 21,
    adress: {
        street: 'Rua 10 de Maio',
        number: 220
    }
}

// O rest operator serve para capturar o resto das chaves existentes dentro do objeto sem ter que determiná-las
const { name, age, ...rest } = user
console.log(rest)

// O rest operator serve tamb