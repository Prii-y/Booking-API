import express  from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import auth from "./routes/auth.js";
// import users from "./routes/users.js";
import hotels from "./routes/hotels.js";
// import rooms from "./routes/rooms.js";

const app=express();
dotenv.config();
const connect= async ()=>{
    try{
        await mongoose.connect(process.env.MONGO);
    }
    catch (err){
        console.log(err);
    }
}
//MIDDLEWARES
app.use(express.json());

app.use('/auth',auth);
app.use('/hotels',hotels);
// app.use('/users',auth);

// app.use('/rooms',auth);
 //Error handeling middleware
app.use((err,req,res,next)=>{

    // console.log('error middleware');
const errorstatus =err.status || 500;
const errmessage=err.message  || 'Something is broken';
res.status(errorstatus).json(
    {
        success:false,
        status:errorstatus,
        message:errmessage, 
    }
)
    
 });

app.listen(7777,()=>{
    connect();
    console.log('connected');
})
