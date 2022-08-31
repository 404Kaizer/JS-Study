const sum = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(a + b === 4) {
                resolve(`OK! ${a} + ${b} = 4`)
            } else {
                reject(`ERRO! ${a} + ${b} != 4`)
            }
        }, 2000)
    })
}

sum(1, 3)
    .then(sumAB => {
        console.log(sumAB)
    })
    .catch(err => {
        console.log(err)
    })