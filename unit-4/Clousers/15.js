 function createCounter(){
    let counter = 0

    return {
        increment : function(){
            counter++
            return counter
        },
        reset : function(){
            counter = 0
            return "Counter has been reset"
        }
    }
 }

 let counter = createCounter()
 console.log(counter.increment())
 console.log(counter.increment())
 console.log(counter.increment())
 console.log(counter.increment())
 console.log(counter.reset())
 console.log(counter.increment())