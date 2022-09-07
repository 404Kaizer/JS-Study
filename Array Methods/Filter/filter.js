// Filter - Cria uma nova array com todos os elementos de uma outra array específica que passem no teste.

const students = [
    { name: 'John', avg: 5 },
    { name: 'Guy', avg: 6 },
    { name: 'Jade', avg: 8 },
    { name: 'Daniel', avg: 3 },
    { name: 'Jason', avg: 4 },
    { name: 'Jace', avg: 5 },
]

const avgFilter = students.filter(grades => {
    let filteredAvg = grades.avg
    let filteredNames = grades.name
    if(filteredAvg < 6) {
        console.log(`O aluno ${filteredNames} está abaixo da média.`)
    }
})