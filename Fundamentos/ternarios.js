const resultado = nota => nota >= 7 ? 'Aprovado' : 'Reprovado'

console.log(resultado(7.1))
console.log(resultado(6.1))


const resultado1 = nota1 => {
    return nota1 >= 7 ? 'Aprovado' : 'Reprovado'
}

console.log(resultado1(7.1))
console.log(resultado1(6.1))