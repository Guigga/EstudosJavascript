// Object.preventExtensions
const produto = Object.preventExtensions ({
    nome: 'Qualquer', preco: 1.99, tag: 'promocao'
})

produto.nome = 'Borracha'
produto.descricao = 'borracha escolar brancha'
console.log(produto)
delete produto.tag
console.log(produto)

//Object.seal
const pessoa = { nome: 'Juliana', idade: 35 }
Object.seal(pessoa)
console.log('Selado:', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
console.log(pessoa)

pessoa.idade = 29
console.log(pessoa) // consegue alterar itens do objeto, mas nao consegue remover nem adicionar novos itens

//Object.freeze = selado + valores constantes nao tem como nem modificar itens

