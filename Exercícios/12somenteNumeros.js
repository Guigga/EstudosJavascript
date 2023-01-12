//crie uma funcao que receba um array de elementos e retorne um array somente com os numeros presentes no array recebido
//como parametro
function filtrarNumeros(array) {
    const soNumeros = []
    for(let item of array){
        if(typeof item === "number")
        soNumeros.push(item)
    }
    return soNumeros
}
console.log(filtrarNumeros(['1','3',3,'e',2,'r']))


//
function filtrarNumeros(array){
    return array.filter(item => typeof item === "number")
}

console.log(filtrarNumeros([1,2,3,"e",'r','tas',"dads","2"]))