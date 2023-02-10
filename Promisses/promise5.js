function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        if(Math.random() < chanceErro) {
            reject('Ocorreu um erro!')
        } else {
            resolve(valor)
        }
    })
}

// funcionarOuNao('testando...', 0.5)
//     .then(v => console.log(`Valor: ${v}`))
//     .catch(err => console.log(`Erro: ${err}`))


funcionarOuNao('testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`)) //depois do catch nenhum valor vai ser obtido
    .then(() => console.log('Fim!'))



//////////////////////////////////////////////////

function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(v => `Valor: ${v}`)
    .then(
        v => console.log(v),
        err => console.log(`Erro Esp.: ${err}`)
    )
    .catch(err => console.log(`Erro: ${err}`)) 
    .then(() => console.log('Fim!'))