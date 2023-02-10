let p = new Promise(function(cumprirPromessa) {
    cumprirPromessa(3, 4)
})

p.then(function(valor, x) {
    console.log(valor, x)
})

/////////////////////////////////////////////////////////

let q = new Promise(function(cumprirPromessa) {
    cumprirPromessa({
        x: 3,
        y: 4
    })
})

q.then(function(valor) {
    console.log(valor)
})

//////////////////////////////////////////////////////////

let r = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Daniel'])
})

r.then(function(valor) {
    console.log(valor)
})

//////////////////////////////////////////////////////////

let a = new Promise(function(cumprirPromessa) {
    cumprirPromessa(['Ana', 'Bia', 'Daniel'])
})

a
    .then(valor => valor[0])
    .then(primeiro => primeiro[0])
    .then(letra => letra.toLowerCase())
    .then(letraMinuscula => console.log(letraMinuscula))