console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1
exports.b =2
module.exports.c = 3

exports = null
console.log(module.exports)

exports = {
    nome: 'Teste'
} //dessa forma nao ira exportar e ira se manter os tres primeiros valores exportados acima. A maneira certa é com o module.exports

console.log(module.exports) // 

module.exports = { publico: true }

//sempre que eu quiser atribuir um novo objeto para ser exportado, eu tenho que usar o module.exports