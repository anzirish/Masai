function reverse(namenum ){

    let reversedNum = 0

    while(namenum>0){

        let rem = namenum%10
        let div = Math.floor(namenum/10)

        reversedNum = reversedNum*10+rem

        namenum = div
    }

    return reversedNum
}

let b = reverse(56)
console.log(b)
