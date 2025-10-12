import mongoose from "mongoose"

export const connectToDB = ()=>{
    mongoose.connect(process.env.MONGO_URI)
    .then(()=> console.log("DB Connected"))
    .catch((e) => console.log(e.message))
}