let dobro = function(a) {
    return 2*a
}


//funcao arrow
dobro = (a) => {
    return 2*a
}

//apenas para um unico parametro

dobro = a => 2*a //return esta implicito
console.log(dobro(Math.PI))


// 
let ola = function () {
    return 'Ola'
}

//
ola = () => 'Ola'
ola = _ => 'Ola' //possui um parametro
console.log(ola())

