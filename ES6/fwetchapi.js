function response(user){

    const noInfo = "Information not available";
    
    // Using destructuring with optional chaining
    const { 
        id = noInfo,
        profile: { 
            name = noInfo,
            address: { 
                city = noInfo, 
                zipcode = noInfo 
            } = {}
        } = {}
    } = user

    const result = `User ${name} (ID : ${id}) lives in ${city} (ZIP : ${zipcode})`

    return result
}

const user = { id: 123, profile: { name: "John Doe", address: { city: "Los Angeles", zipcode: "90001" } } };
// const user = { id: 123, profile: { name: "John Doe" } };

const result = response(user)

console.log(result)