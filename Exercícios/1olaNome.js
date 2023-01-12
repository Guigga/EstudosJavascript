//Crie uma funcao que retorna a string "Ola," concatenada com um argumento text (a ser passado para a funcao) 
// e com o ponto de exclamacao "!" no final.

//Meu código
function olaNome(nome) {
    const ola = "Olá, "
    return ola + nome + "!"
}

console.log(olaNome("Guilherme"))

//Código da resposta
//1

function cumprimentar(nome) {
    const saudacao = "Olá"
    return [saudacao, nome].join(', ').concat("!")
}

//2
function cumprimentar(nome) {
    return "Olá, " + nome + "!"
}

//3
function cumprimentar(nome) {
    return `Olá, ${nome}!`
}