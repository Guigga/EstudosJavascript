//Elabore uma funcao que receba um array de numeros e retorne um array que tenha todos os numeros que sao pares e que
//tambem tenham indices pares

function parIndicePar (numeros) {
    let soParIndicePar = []
    for(let i=0; i < numeros.length; i++){
        if( numeros[i] % 2 == 0 && i % 2 == 0 ){
            soParIndicePar.push(numeros[i])
        }
    }
    return soParIndicePar
}

console.log(parIndicePar([10,70,22,43]))




