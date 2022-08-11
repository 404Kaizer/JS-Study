checkName = (n) => {
    let name = n
    return console.log(`Your Name is ${name}`) // `Template Literals`
}

checkSex = (s) => {
    let sex = s
    if(sex === "Male" || sex === "male") { return console.log("You Are Male!") }
    if(sex === "Female" || sex === "female") { return console.log("You Are Female!") }
}

checkAge = (a) => {
    let years = a
    if(years < 18) { return console.log("You Are Not an Adult!") }
    if(years >= 18) { return console.log("You Are an Adult!") }
}

checkName("Jorge")
checkSex("Male")
checkAge(15)