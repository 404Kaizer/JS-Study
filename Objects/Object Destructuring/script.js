const user = {
    name: 'Hugo',
    age: 21,
    adress: {
        street: 'Rua 10 de Maio',
        number: 220
    }
}

// Na desestruturação você determina quais chaves você quer capturar de dentro do objeto
// Na desestruturação de um objeto pode-se atribuir valores padrões para chaves inexistentes, assim como renomear as que já existem
const { name: nickname, age = 22, adress, cep = 28300000 } = user
console.log(cep)

// A desestruturação pode também ser feita dentro de uma function
const returnName = ({ name }) => {
    return name;
}

console.log(returnName(user))