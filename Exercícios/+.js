// elabore uma funcao que recebe um numero como parametro e retorne uma string com o simbolo "+" na quantidade 
// especificada no parametro

function repetir(quantidade) {
    return Array(quantidade).fill('+')
}

console.log(repetir(3))

//resposta do exercicio
function simboloMais(quantidade) {
    let resultado = ''
    
    for(let i = 0; i < quantidade; i++){
        resultado += '+'
    }
    return resultado
}

console.log(simboloMais(5))

//2

function simboloPlus(quantidade) {
    return Array(quantidade).fill('+').join('')
}

console.log(simboloPlus(6))