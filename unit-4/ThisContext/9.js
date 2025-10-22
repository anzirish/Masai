function deepClone(obj){
    let clonedObj = JSON.parse(JSON.stringify(obj))
    clonedObj.hobbies = [...clonedObj.hobbies, "coding"]
    return clonedObj
}

let obj = { name: "Alice", hobbies: ["reading", "traveling"] }
let updatedCopy = deepClone(obj)

console.log(obj)
console.log(updatedCopy)
