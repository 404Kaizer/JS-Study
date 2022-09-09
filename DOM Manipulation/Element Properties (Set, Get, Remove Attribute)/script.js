let paragraph = document.querySelector('.class-description')

// getAttribute coleta o atributo; setAttribute altera o atributo; removeAttribute remove o atributo
console.log(paragraph.getAttribute('class'))    // Coletar
console.log(paragraph.setAttribute('class', 'class-paragraph'))     // Alterar
console.log(paragraph.getAttribute('class'))    // Coletar novo

console.log(paragraph.removeAttribute('class'))     // Remover
console.log(paragraph.getAttribute('class'))    // Coletar null