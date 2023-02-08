// operador ... rest(juntar)/spread(Espalhar)
// usar rest com parametro de funcao

//usar spread com objeto
const funcionario = { nome: 'maria', salario: 12348.99 }
const clone = { ativo: true, ...funcionario }

console.log(clone)

//usar spread com array
const grupoA = ['Joao', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)