//Desenvolva uma funcao que recebe como parametro um objeto e retorne um array de array, em que cada elementro é um array
//formado pelos pares chave/valor que corresponde a um atributo do objeto
objeto = { nome: "guiga", profissao: "programador"}

function filtrarEmArrays (objeto){
    const resultado = []

    for (let chave in objeto){
        resultado.push([chave, objeto[chave]])
    }
    return resultado
}

console.log(JSON.stringify(filtrarEmArrays(objeto)))


//
function objetoParaArray(objeto) {
    const chaves = Object.keys(objeto)
    const resultado = chaves.map( chave => [chave, objeto[chave]])

    return resultado
}

//
function objetoParaArray(objeto) {
    return Object.entries(objeto)
}