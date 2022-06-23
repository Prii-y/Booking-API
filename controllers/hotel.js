import Hotels from "../Models/Hotels.js";

export async function  createHotel (req,res,next){
    try
    {
        const newHotel= new Hotels(req.body)
        const savedHotel= await newHotel.save();
        res.status(200).json(savedHotel);
    }
    catch(err)
    {
     next(err);  
    }
};

 export const updateHotels=async(req,res,next)=>{
    try{
        const updatedHotel= await Hotels.findByIdAndUpdate(req.params.id,
            {$set:req.body},{new:true}
            )
            res.status(200).json(updatedHotel);
    }
    catch(err){
          next(err);
    }

}

export const deleteHotels=async(req,res)=>{
    try{
    await Hotels.findByIdAndDelete(req.params.id)
            res.status(200).json('Hotel Deleted');
    }
    catch(err){
            next(err) 
         }

}

export const getHotels=async(req,res)=>{
    try{
    const getHotels=await Hotels.findById(req.params.id)
            res.status(200).json(getHotels);
    }
    catch(err){
       next(err)
    }   

}

export const getallHotels=async(req,res ,next)=>{
    //const fail=true;
    // if (fail){ return next(createrror(401,'Not authenticated'))}
    try{
    const getHotels=await Hotels.find()
            res.status(200).json(getHotels);
    } 
    catch(err){
            next(err);
    }

}