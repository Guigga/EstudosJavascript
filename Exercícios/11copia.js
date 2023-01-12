//Escrever uma funcao que recebe um objeto como primeiro parametro e, como segundo parametro, o nome de uma propriedade
//contida nesse objeto. Em seguida, retorne uma copia desse objeto sem a propriedade especificada no segundo parametro

//minha resposta:

const carro = {
    modelo: 'A4',
    valor: 89000,
    proprietario: {
        nome: 'Raul',
        idade: 56,
        endereco: {
            logradouro: 'Rua ABC',
            numero: 123
        }
    }
}

function removerPropriedade(objeto,nomeDaPropriedade){
    const copia = (objeto)
    delete copia[nomeDaPropriedade]
    return copia
}

console.log(removerPropriedade(carro,'proprietario'))

