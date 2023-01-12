//escreva uma funcao que receba dois parametros. O primeiro parametro é um elemento que repetira, enquanto o segundo
//sera o numero de vezes que havera repeticao. Um array sera retornado

function multiplicacao (objeto, repeticoes) {
    const resultado = []
    for(let i = 0; i < repeticoes; i++){
        resultado.push(objeto)
    }
    return resultado
}

console.log(multiplicacao("codigo",4))

//resposta exercicio

function repetir(item, quantidade) {
    return Array(quantidade).fill(item)
}