require('./4global')

console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita'  //um objeto passivel de ser modificado em todos os lugares, o que pode ser um problema
console.log(MinhaApp.nome) // umas das opcoes é colocar o freeze