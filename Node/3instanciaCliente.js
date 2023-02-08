const contadorA = require('./3instanciaUnica')
const contadorB = require('./3instanciaUnica')

const contadorC = require('./3instanciaNova')()

const contadorD = require('./3instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorC.valor, contadorD.valor)