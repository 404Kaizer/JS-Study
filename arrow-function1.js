checkName = (n) => {
    let name = n
    name = "Carlos"
    return console.log(`Your Name is ${name}`) // `Template Literals`
}

checkSex = (s) => {
    let sex = s
    sex = "Female"

    if(sex === "Male" || sex === "male") { return console.log("You Are Male!") }
    if(sex === "Female" || sex === "female") { return console.log("You Are Female!") }
}

checkAge = (a) => {
    let years = a
    years = 55

    if(years < 18) { return console.log("You Are Not an Adult!") }
    if(years >= 18) { return console.log("You Are an Adult!") }
}

checkName()
checkSex()
checkAge()