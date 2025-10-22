const mongoose = require("mongoose");

 const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("DB Connected"))
    .catch((e) => console.log(e.message))
}

module.exports = connectToDB