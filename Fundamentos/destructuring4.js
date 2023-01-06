function rand([min = 0, max = 1000]) {
    if (min > max)[min, max] = [max, min] //oq é min passa a ser max e oq é max passa a ser min
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))