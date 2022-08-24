// Protótipos possibilitam criar novos métodos para arrays. Também permite criar novas propriedades para objetos.
// Entretanto não se é recomendado modificar protótipos de objetos que você não possa controlar, como datatypes.

class citizen {
    constructor(fName, lName, age, gender) {
        this.firstName = fName;
        this.lastName = lName;
        this.old = age;
        this.sex = gender;
    }
}

citizen.prototype.nacionality = "Brazilian"

const PERSON = new citizen("Carlos", "Magno", 52, "Male")
console.log(`${PERSON.firstName} is ${PERSON.nacionality}`)