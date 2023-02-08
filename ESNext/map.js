const tecnologias = new Map()
tecnologias.set('react', { framework: false})
tecnologias.set('angular', { framework: true})

console.log(tecnologias.react)
console.log(tecnologias.get('react'))
console.log(tecnologias.get('react').framework)

const chaveVariadas = new Map([
    [function () { }, 'Funcao'],
    [{}, 'Objeto'],
    [123, 'Numero']
]) // conjunto chave valor

chaveVariadas.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariadas.has(123)) //vai dizer se o elemento está contido dentro desse map

chaveVariadas.delete(123)

console.log(chaveVariadas.has(123))

console.log(chaveVariadas.size)

chaveVariadas.set(123, 'a')
chaveVariadas.set(123, 'b')
chaveVariadas.set(123, 'b')
chaveVariadas.set(456, 'b')

console.log(chaveVariadas)