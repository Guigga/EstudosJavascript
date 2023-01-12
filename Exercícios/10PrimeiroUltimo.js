//crie uma funcao que receba um array e retorne o primeiro e o ultimo elemento desse array como um novo array

function primeiroUltimo (array) {
    return [array[1], array[array.length-1]]
}

console.log(primeiroUltimo(['1','2','3','4','5']))

//resposta
//1
function receberPrimeiroEUltimoElemento(elementos) {
    const primeiroElemento = elementos.shift()
    const ultimoElemento = elementos.pop()

    return [primeiroElemento, ultimoElemento]
}
//2
function receberPrimeiroEUltimoElemento([primeiroElemento, ...elementosRestantes]) {
    const ultimoElemento = elementosRestantes.pop()
    return [primeiroElemento, ultimoElemento]
}

