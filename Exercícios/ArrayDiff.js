function squareDigits(num) {
    let result = ""
    const str = num.toString().split('')
    for (let i = 0; i < str.length; i++){
        let digit = parseInt(str[i])
        result += digit * digit
    }
    return result
}

console.log(squareDigits(3212))


