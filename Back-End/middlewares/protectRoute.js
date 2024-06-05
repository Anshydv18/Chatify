import jwt from 'jsonwebtoken'
import { User } from '../models/user.model.js';

export const protectRoute = async(req,res,next)=>{
    try {
        const token = req.cookies.jwt;
        if(!token){
            return res.status(401).json({error:"unauthorized -No Token Provided"})
        }
        const decode =  jwt.verify(token,process.env.JWT_SECRET_KEY);
        if(!decode){
            return res.status(401).json({error:"Unauthorized -No TOken Provided"});
        }
        const user = await User.findById(decode.userId).select("-password");
        if(!user){
            return res.status(401).json({error:"Unauthorized -User Not Found"});
        }
        req.user =user;
        next();
    } catch (error) {
        return res.status
    }
}