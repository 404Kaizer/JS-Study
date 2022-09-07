const user = {
    name: 'Hugo',
    age: 22,
    adress: {
        street: 'Rua 10 de Maio',
        number: 220
    }
}

console.log(('name' in user)) // Mostra se há dentro do objeto
console.log(Object.keys(user)) // Mostra todas as chaves do objeto
console.log(Object.values(user)) // Mostra todos os valores do objeto
console.log(JSON.stringify(Object.values(user))) // O método JSON.stringify transforma o objeto em uma string
console.log(JSON.stringify(Object.entries(user))) // Mostra uma array com várias arrays dentro do objeto, sendo a primeira a chave e a outra o valor