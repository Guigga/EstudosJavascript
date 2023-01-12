// Crie uma funcao que recebe um numero (de 1 a 12) e retorne o mes correspondente como uma string. Por exemplo, se a 
// entrada for 2, a funcao devera retornar "fevereiro", pois este é o 2 mes

const meses = ['janeiro', 'fevereiro', 'marco', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
function numeroEmMeses (numeroDoMes) {
    return meses[numeroDoMes-1]
}

console.log(numeroEmMeses(4))