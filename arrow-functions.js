// Arrow Functions São Funções Anônimas

function sum(a, b) {
    return a + b
}

// Arrow Function
let sum2 = (a, b) => a + b  // Return

function isPositive(number) {
    return number >= 0
}

// Arrow Function
let isPositive2 = number => number >= 0

function randomNumber() {
    return Math.random
}

// Arrow Function
let randomNumber2 = () => Math.random

document.addEventListener("click", function() {
    console.log("Click")
})

// Arrow Function
document.addEventListener("click", () => console.log("Click"))