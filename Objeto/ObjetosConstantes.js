// pessoa -> 123 -> {...}
const pessoa = {nome: 'Joao'}
pessoa.nome = 'Pedro'
console.log(pessoa)

// pessoa -> 456 -> {...}
// pessoa = { nome: 'Ana' }

Object.freeze(pessoa) //congelei o objeto, nao vai atribuir mais nenhuma caracteristica ao objeto e nem deletar

pessoa.nome = 'Maria'
console.log(pessoa.nome)
