// console.log(global)
global.MinhaApp = Object.freeze ({ //aqui foi colocado o freeze para que nao tenha mudanca do objeto em todos os lugares
    saudacao() {
        return 'Estou em todos os lugares!'
    },
    nome: 'Sistema Legal'
})

