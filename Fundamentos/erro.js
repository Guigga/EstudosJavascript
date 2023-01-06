// function imprimirNomeGritando(obj) {
//     console.log(obj.name.toUpperCase() + '!!!')
// }

// const obj = { nome: 'Roberto' }
// imprimirNomeGritando(obj)

function tratarErroELancar(erro) {
    //throw new Error('...')
    // throw 10
    throw {
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}

function imprimirNomeGritando(obj) {
    try {
        console.log(obj.name.toUpperCase() + '!!!')
    } catch (e) {
        tratarErroELancar(e)
    } finally { //vai lancar mesmo que tenha erro ou nao
        console.log('final')
    }
}
const obj = { nome: 'Roberto' }
imprimirNomeGritando(obj)