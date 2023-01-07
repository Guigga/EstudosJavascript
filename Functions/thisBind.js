const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)  //sem o this a funcao nao executaria a saudacao, pois está fora do seu escopo
    }
}

pessoa.falar()
const falar = pessoa.falar
falar() //conflito entre paradigmas: funcional e OO | falar deixa de receber saudacao, pois agora saudacao aponta para this

const falarDePessoa = pessoa.falar.bind(pessoa) //com bind pessoa volta a apontar falar
falarDePessoa()