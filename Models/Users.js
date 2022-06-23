import mongoose from "mongoose";

const userschema= new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
      unique:true  
    },
    password:{
        type:String,
        required:true
    },
    isadmin:{
        type:Boolean,
        default:false
    },
    
  
},{timestamps:true});

//use of timestamps is to record the createdat and updated a times and date
export default mongoose.model('Users',userschema);