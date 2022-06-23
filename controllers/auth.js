import Users from "../Models/Users.js";
import bcrypt from 'bcryptjs';
import { createrror } from "../utils/Error.js";
export const register=async (req,res,next)=>
{
try{
const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync("req.body.password", salt);

    const newuser= new Users({
        username:req.body.username,
        password:hash,
        email: req.body.email
     });
    const saveduser=await newuser.save();
    res.status(200).json(saveduser);
}
catch(err){
next(err);
}

}

export const login= async (req,res,next)=>
{
    try{
            const userfound=await Users.findOne({username:req.body.username});
            if(!userfound){return next(createerror(404,'user not found'))};

             const passwordverified= await bcrypt.compare(req.body.password,userfound.password);
             if(!passwordverified){return next(createrror(400,'password incorrect'));};

            res.status(200).json(userfound);

    }
    catch(err){
        console.log(err);
    }
}