//crie uma funcao que receba dois numeros e retorne se o primeiro é maior ou igual ao segundo
// devera diferenciar numeros de strings

function maiorOuIgual (num1, num2) {
    if (num1 >= num2 && typeof num1 == typeof num2) {
        return true
    } {
        return false
    }
}

console.log(maiorOuIgual(5, 1))