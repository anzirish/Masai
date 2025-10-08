const mongoose = require("mongoose")

const connectToDB = ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/mydb")
    .then(()=> console.log("DB Connected"))
    .catch((e) => console.log(e.message))
}

module.exports = connectToDB