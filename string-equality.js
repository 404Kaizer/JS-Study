// Diferença entre "==" e "===" ou "!=" e "!=="

// Resultado: True; Os datatypes serão equalizados para realizar a comparação, e 1 = 1
console.log(1 == '1')

// Resultado: False; O resultado será o resultado verdadeiro. Um inteiro é diferente  de uma string, retornando False.
console.log(1 === '1')

// O mesmo serve pro sinal de diferente...

// Resultado: False.
console.log(1 != '1')
// Resultado: True.
console.log(1 !== '1')

// Usar "==" é válido para comparar valores NULOS

// Resultado: True;
console.log(null == null)
console.log(null == undefined)  // Null e Undefined são considerados iguais.

// Resultado: False;
console.log(null === undefined)