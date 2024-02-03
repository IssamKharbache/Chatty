import jwt from 'jsonwebtoken';
import User from '../Models/user.model.js';

const protectRoute = async (req,res,next) => {

    try {
        const token = req.cookies.jwt;
       
        if(!token){
            return res.status(401).json({error:"Unauthorized - no  token found "})
        }
        const decodToken = jwt.verify(token,process.env.JWT_SECRET);
        if(!decodToken){
            return res.status(401).json({error:"Unauthorized - invalid JWT token"})
        }
        const user = await User.findById(decodToken.userId).select("-password");
        if(!user){
            return res.status(4049).json({error:"User not found"})
        }
        req.user = user ; 

        next();
    } catch (error) {
        console.log("Error in protectRoute middleware: " + error.message);
        res.status(500).json({error:"Internal Server Error"});
    }
}


export default protectRoute ;