console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana'] // modo recomendado
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo' //preferivel para substituir
aprovados.push('Abia') //adicionar um elemento na ultima posicao do array
console.log(aprovados.length)
console.log(aprovados)

aprovados[9] = 'Rafael'
console.log(aprovados.length)
console.log(aprovados)
console.log(aprovados[8] === undefined)

console.log(aprovados)
aprovados.sort() //ordena o array por ordem alfabetica/numeral
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados)

aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados)
aprovados.splice(1, 2) // serve para remover ou adicionar, ou remover e adicionar ao mesmo tempo
                    // primeiro elemento serve para o indice que eu quero trabalhar
                    // segundo elemento é quantos elementos eu quero excluir na altura do elemento que eu que coloquei
console.log(aprovados)

// para adicionar elementos:
aprovados.splice(1, 0, 'elemento adicionado', 'elemento 2', 'elemento3')
console.log(aprovados)

// para excluir e adicionar elementos
aprovados.splice(2, 2, 'elemento substituido1', 'elemento substituido2', 'elemento adiconado3')
console.log(aprovados)