const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']
pilotos.pop() // massa quebrou o carro // remove o ultimo elemento do array
console.log(pilotos)

pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() // remove da primeira posicao do array e reorganiza 
console.log(pilotos) 

pilotos.unshift('Hamminton') // adiciona na primeira posicao
console.log(pilotos)

//splice tanto adiciona quanto remove elementos no array

//slice
const algunsPilotos1 = pilotos.slice(2) // criar um novo array com todos os pilotos a partir do indice colocado
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1, 4) // vai do (indice), (n do elemento aberto no n)
console.log(algunsPilotos2)