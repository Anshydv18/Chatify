import jwt from "jsonwebtoken"

const generateTokenAndSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET_KEY,{expiresIn:"15d"})

    res.cookie("jwt",token,{
        maxAge:15*24*60*1000, //in millisec
        httpOnly:true,
        sameSite:"strict",
        secure:true
    })
}

export default generateTokenAndSetCookie