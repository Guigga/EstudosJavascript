//faça um programa de multiplicacao sem o operador *

function multiplicacao (num1, num2) {
    let resultado = 0
    for(let i = 0; i < num2; i++){
        resultado += num1
    }
    return resultado
}

console.log(multiplicacao(0, 7))

//resposta do exercicio

function multiplicar (numero, multiplicador) {
    if (numero === 0 || multiplicacao === 0) return 0

    return multiplicador === 1 ? numero : numero + multiplicar(numero, multiplicador-1)
}

console.log(multiplicar(3, 3))

