//Elabore uma funcao que receba um array de numeros e retorne um array que tenha todos os numeros que sao pares e que
//tambem tenham indices pares

function parIndicePar (numeros) {
    let soParIndicePar = []
    for(let i=0; i < numeros.length; i++){
        if( numeros[i] % 2 === 0 && i % 2 === 0 ){
            soParIndicePar.push(numeros[i])
        }
    }
    return soParIndicePar
}

console.log(parIndicePar([10,70,22,43]))


//resposta do exercicio
function receberSomenteOsParesDeIndicesPares(numeros){
let resultado = []

    for(let i = 0; i < numeros.length; i+=2){
        const numeroPar = numeros[i] % 2 === 0

        if(numeroPar){
            resultado.push(numeros[i])
        }

     return resultado
    }
}


//2

function receberSomenteOsParesDeIndicesPares(numeros){
    return numeros.filter((numero, indice) => {
        const numeroPar = numero % 2 === 0
        const indicePar = indice % 2 === 0

        return numeroPar && indicePar
    }) 
}
