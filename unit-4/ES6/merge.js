const profile = { name: "Charlie", age: 29, address: { city: "San Francisco", zipcode: "94101" } };

const updates = { age: 30, address: { zipcode: "94109", country: "USA" } };

function merge(profile, updates){

let result = {...profile, ...updates}

return result
}

console.log(merge(profile, updates))