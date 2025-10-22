function multiplyNumbers (num1, num2){
    return multiply.apply(null, [num1, num2])
}

function multiply(a, b){
    if(!a | !b) return "Error"
    return a*b
}

let result = multiplyNumbers(4, 189)
console.log(result)