// O Nullish Coalescing Operator server para tratar de valores nulos em variáveis. Caso uma variável seja nula, outro valor será mostrado como alternativa.

let age = 0;
document.body.innerText = `Sua idade é ${age || 'indefinida'}`; // Dessa forma, o JS trataria um valor 0 como sendo, também, nulo. O valor 0, assim como uma string vazia, uma array vazia, null, undefined, é tratado como "falsy". Ou seja, valores "não válidos".

// Para isso, usa-se o Nullish Coalescing Operator...
document.body.innerText = `Sua idade é ${age ?? 'indefinida'}`;