//Escreva uma funcao que receba um valor booleano ou numerico. Se o parametro fornecido for booleano, o retorno da funcao
//devera ser o inverso. Por exemplo, se a entrada for false, retornara true, Se o parametro for numerico, o retorno sera
//o numero inverso. Por exemplo, se for fornecido 1, o retorno sera -1. Se o parametro de entrada nao for de nenhum dos
//tipos acima, retorne "booleano ou numero esperados, mas o paremtro é do tipo..."

function inverso (parametro) {
    const tipoParametro = typeof parametro
    if (tipoParametro == "boolean") {
        return !parametro
    } else if (tipoParametro == "number") {
        return -parametro
    } else {
        return `booleano ou numero esperados, mas o parametro é do tipo ${tipoParametro}`
    }
}
console.log(inverso(-2))