const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice) {
    console.log(`${indice + 1}. ${nome}`)
}

//ForEach é uma funcao de fabricantes e fabricante é um array. Para cada elemento do parametro ele vai chamar a funcao imprimir
fabricantes.forEach(imprimir)
fabricantes.forEach(fabricante => console.log(fabricante))

