// Hoisting = Elevação ou Erguer

// var x    <=

console.log(x) // Indefinida pois a variável ainda não foi criada

{ // Escopo de Bloco
    var x = 0 // A variável foi criada e será erguida até o topo do código
}

console.log(x) // Tendo a variável criada, seu valor foi definido como 0