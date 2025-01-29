import mongoose from "mongoose";

export const connectDB = async() =>{
await mongoose.connect('mongodb+srv://greatstack:aaa111@cluster0.vgjgw.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}