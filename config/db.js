import mongoose from "mongoose";

export const connectDB =async()=>{
    await mongoose.connect('mongodb+srv://amandha:ama610156@cluster0.xl4unty.mongodb.net/food-delivery').then(()=>console.log("DB connected"))
  
}