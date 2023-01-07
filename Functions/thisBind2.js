function Pessoa() {
    this.idade = 0

    setInterval(function() {
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) //a cada x(1000) mili segundos a funcao vai ser disparada // bind vai amarrar o this do objeto a chamada da funcao
}

new Pessoa 


function Pessoa() {
    this.idade = 0

    const self = this
    setInterval(function() {
        self.idade++
        console.log(self.idade)
    }, 1000)
}

new Pessoa 