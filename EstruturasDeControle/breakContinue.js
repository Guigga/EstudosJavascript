const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for (x in nums) {
    if (x == 5) {
        break                  //break age sobre o bloco for
    }
    console.log(`${x} = ${nums[x]}`)
}

for (y in nums) {
    if (y == 5) {
        continue               //desviou o fluxo pulando o indice 5
    }
    console.log(`${y} = ${nums[y]}`)
}


externo:
for (a in nums) {
    for (b in nums) {
        if(a == 2 && b == 3) break externo // vai sair do laço externo
        console.log(`par = ${a},${b}`)
    }
}

console.log('Fim!') 

//evitar esse tipo de recurso!