//Closure é o escopo criado quando uma funcao é decladara
//Esse escopo permite que a funcao acesse e manipule variaveis externas à funcao

//contexto lexico em acao!

const x = 'global'

function fora() {
    const x = 'local'
    function dentro() {
        return x
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())