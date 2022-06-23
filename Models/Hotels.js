import mongoose from "mongoose";

const hotelschema= new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    propertytype:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    distance:{
        type:String,
        required:true
    },
    photos:{
        type:[String]
       
    },
    desc:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        min:0,
        max:5
    },
    rooms:{
        type:[String]
    },
    cheapestprice:{
        type:Number,
        required:true
    },
    featured:{
        type:Boolean,
        default:false
    }

});

export default mongoose.model('Hotels',hotelschema);