//escreva uma funcao que receba um array de numeros e retornara a soma de todos os numeros desse array

function somarNumeros(numeros) {
    const quantidadeDeNumeros = numeros.length 

    return (quantidadeDeNumeros === 0) ? 0 : numeros[0] + somarNumeros(numeros.slice(1))
}

//
function somarNumeros(numeros) {
    let soma = 0
    numeros.forEach(numero => soma += numero)
        
    return soma
}

//
function somarNumeros(numeros) {
    const soma = numeros.reduce ( (acumulador, numeroAtual) => acumulador + numeroAtual, 0)

    return soma
}