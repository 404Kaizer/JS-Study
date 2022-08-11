let Person = ({
    checkName: (n) => {
        let name = n
        return console.log(`Name: ${name}`)
    },
    checkAge: (a) => {
        let age = a
        return console.log(`Age: ${age}`)
    },
    checkSex: (s) => {
        let sex = s
        return console.log(`Sex: ${sex}`)
    },
    checkCountry: (c) => {
        let country = c
        return console.log(`Country: ${country}`)
    }
})

Person.checkName("Hugo")
Person.checkAge(22)
Person.checkSex("Male")
Person.checkCountry("Brasil")