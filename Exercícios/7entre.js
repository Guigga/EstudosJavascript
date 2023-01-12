// Crie uma funcao que receba quatro numeros como parametro (n, min, max, inclusivo) e retorne se o parametro numero esta
// entre o minimo e o maximo. Quando o parametro inclusivo for true, tenha entre como "inclusivo", caso nao seja informado,
// seu valor devera ser false

function estaEntre (numero, minimo, maximo, inclusivo){
    if (inclusivo == true) {
        if (numero >= minimo && numero <= maximo) {
            return true
       } else {
            return false
       }
    } else {
        if (numero > minimo && numero <= maximo) {
            return true
        }
        else {
            return false
        }
    }
}

console.log(estaEntre(505, 505, 700))

//resposta do exercicio

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    if (inclusivo) return numero >= minimo && numero <= maximo

    return numero > minimo && numero < maximo
}
console.log(estaEntre(505, 505, 700, true))

//2

function estaEntre(numero, minimo, maximo, inclusivo = false) {
    return inclusivo ? numero >= minimo && numero <= maximo : numero > minimo && numero < maximo
}
console.log(estaEntre(505, 505, 700))