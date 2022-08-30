// Callbacks podem ser tanto síncronos quanto assíncronos.
// Callbacks garantem que uma função seja executada logo após uma tarefa ser concluída.

// Callback a partir de um botão.
document.querySelector('#callback-btn').addEventListener('click', () => {
    setTimeout(callbackBtn = () => {
        console.log('Função de callback acionada pelo click no botão e executada após 3 segundos.')
    }, 3000)
})

// Callback interno.
setTimeout(callback = () => {
    console.log('Essa mensagem será exibida após 2 segundos.')
}, 2000);


// Callback externo.
externalCallbackFunction = () => {
    console.log('Essa mensagem será exibida após 1 segundos.')
}

setTimeout(externalCallbackFunction, 1000)