// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 123
    }
}
console.log(pessoa)

const { nome, idade } = pessoa //estrutura de desestruturação
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n, i)

const { sobrenome, humor = true } = pessoa
console.log(sobrenome, humor)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)