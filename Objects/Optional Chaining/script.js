const user = {
    name: 'Hugo',
    age: 21,
    adress: {
        street: 'Rua 10 de Maio',
        number: 220,
        zip: {
            code: 2830000,
            checkCountry: () => {
                return 'Brasil'
            }
        }
    }
}

console.log(user.adress.zip.code) // Todas as chaves existem dentro do objeto, então a chave "code" terá seu valor printado

// O optional chaining consiste em verificar se determinada chave existe dentro do objeto e, caso não exista, o código pare de verificar
console.log(user.adress?.country ?? 'Não informado') // Nesse caso, a chave "country" não existe dentro do objeto, então, usa-se o Nullish Coalescing Operator para retornar uma mensagem ao invés do valor requirido

// Também é possível realizar a verificação com functions dentro do objeto colocando "?." antes das "()"
console.log(user.adress?.zip?.checkCountry?.() ?? 'Não informado') // Nesse caso, a function existe
console.log(user.adress?.zip?.checkState?.() ?? 'Não informado') // Nesse caso, a function não existe
