import User from '../Models/user.model.js';
import bcrypt from 'bcryptjs';
import generateTokenAndSetCookie from '../utils/generateToken.js';

export const login = async (req,res) =>{
    try {
        const {username,password} = req.body;
        const user = await User.findOne({username});
        const isPasswordCorrect = await  bcrypt.compare(password, user?.password || "");
        if(!user ){
            return res.status(400).json({error:"User not found"});
        }
        if(!user || !isPasswordCorrect){
            return res.status(400).json({error:"Username or password incorrect"});
        }

        generateTokenAndSetCookie(user._id, res);

        res.status(200).json({
            _id : user._id,
            fullName : user.fullName,
            username : user.username,
            profileAvatar : user.profileAvatar
        })

    } catch (error) {
        console.log("Error in login " , error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
    };

export const logout = (req,res) =>{
 try {
    res.cookie('jwt',"",{maxAge:0})
    res.status(200).json({message:"Logged out successfully"})
 } catch (error) {
    console.log("Error in logout " , error.message);
        res.status(500).json({error:"Internal Server Error"})
 }
};

export const signup = async (req,res) =>{
    try { 
        const { fullName , username , password , confirmPassword , gender } =  req.body;
        
        if(password!==confirmPassword){
          return res.status(400).json({error:"Passwords does not match "});
        }
        const userExist = await User.findOne({username});

        if(userExist){
            return res.status(400).json({error:"Username already exists , try another one"});

        }

         //save password hashed
         const salt = await bcrypt.genSalt(10);
         const hashedPassword = await bcrypt.hash(password, salt);

          
        // getting boy and girl user avatar
        const MaleAvatar = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const FemaleAvatar = `https://avatar.iran.liara.run/public/girl?username=${username}`;


        //saving user 
        const newUser =  new User({
            fullName,
            username,
            password:hashedPassword,
            gender,
            profileAvatar : gender === "male" ? MaleAvatar : FemaleAvatar,
        });

       if(newUser){
        //generate JWT token 
         generateTokenAndSetCookie(newUser._id, res);
         
         //saving user and returning json information
        await newUser.save();
        res.status(201).json({
        _id : newUser._id,
        fullName : newUser.fullName,
        username : newUser.username,
        profileAvatar : newUser.profileAvatar
       })
    
    }
    } catch (error) {
        console.log("Error in sign up " , error.message);
        res.status(500).json({error:"Internal Server Error"})
    }
    };