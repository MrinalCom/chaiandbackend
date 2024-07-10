// require('dotenv').config({path:'./env'})
import dotenv from "dotenv"
import connectDB from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDB().then(()=>{
    app.listen(process.env.PORT || 8000,()=>{
        console.log(`Server is running on port ${process.env.PORT}`)
    })
    app.on("error",(error)=>{
        console.log(error);
        throw error
    })
}

).catch(()=>{
    console.log(`MongoDB connection failed`)
})
















/*
import express from "express"
const app=express();

(async ()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("ERROR",error);
        throw error

       })
       app.listen(process.env.PORT,()=>{
        console.log(`Server is listening on PORT ${process.env.PORT }`);
       })
    }
    catch(error){
        console.error("ERROR",error)
        throw error
    }
})() ---this thing is known as iife  function define and call at the same time

*/ 