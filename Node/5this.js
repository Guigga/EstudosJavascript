console.log(this === global)

console.log(this === module)

console.log(this === module.exports)
console.log(this === exports)

function logThis() {
    console.log('Dentro de uma função...')
    console.log(this === exports) // dentro de uma funcao, o this nao aponta para exports, somente fora da funcao
    console.log(this === module.exports) // o mesmo acontece com module.exports
    console.log(this === global) //dentro da funcao o trhis aponta para global


}

logThis()