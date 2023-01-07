console.log(soma(3,4))
// console.log(sub(3,4)) nao roda se for chamado antes da funcao
// console.log(mult(3,4)) tambem nao roda


// function declaration
function soma(x, y) {
    return x + y
}

// function expression
const sub = function(x, y) {
    return x - y
}

//named function expression
const mult = function mult(x, y) {
    return x * y
}

