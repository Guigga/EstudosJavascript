//sempre que houver uma pasta com o nome Cliente, signfica que ela vai usar outros modulos

const moduloA = require('./moduloA') // oque foi exportado do moduloA está armazenado dentro dessa constante
const moduloB = require('./moduloB')

console.log(moduloA.ola)
console.log(moduloA.bemVindo)
console.log(moduloA.ateLogo)
console.log(moduloA) //tres atributos de forma diferente no mesmo objeto

console.log(moduloB.bomDia)