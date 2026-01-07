import bcrypt from "bcryptjs";
import User from "../Model/User.model.js";
import { errorhandle } from "../utils/Error.js";
import jwt from "jsonwebtoken"
import cookie from "cookie-parser"
export const Signup = async (req, res,next) => {
  try {
    const { fullname, email, password, profileImage, adminjoincode } = req.body;

    if (!fullname || !email || !password) {
      return next(errorhandle(400,"All required fields missing"))
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(errorhandle(400,"User already exists"))
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    let role = "user";
    if (adminjoincode && adminjoincode === process.env.ADMIN_JOIN_CODE) {
      role = "admin";
    }

    const NewUser = await User({
      fullname,
      email,
      password: hashedPassword,
      profileImage,
      role,
    });

    NewUser.save();
    res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: NewUser._id,
        fullname: NewUser.fullname,
        email: NewUser.email,
        role: NewUser.role,
        profileImage: NewUser.profileImage,
      },
    });
  } catch (error) {
    return next(error.message)
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password are required" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
 
    const token = jwt.sign( {id:user._id}, process.env.SECRET_KEY, {expiresIn:"7d"})
    res.cookie("access_token",token,{
        httpOnly: true,
      
      maxAge: 7 * 24 * 60 * 60 * 1000,
    })
    res.status(200).json({
        success:true,
        message:"login sucessfully",
        user:{
            id:user._id,
            fullname:user.fullname,
            email:user.email,
            role:user.role,
            profileImage:user.profileImage

        },
    })

  } catch (error) {
    console.log(error)
    res.status(500).json({ message: "Server error" });
  }
};

export const userProfile =async(req,res,next)=>{
     const user=await User.findById(req.user.id)

     if(!user){
         return next(errorhandle(404,"User Not Found"))
     }
    res.status(200).json({
        success:true,
        
        user:{
            id:user._id,
            fullname:user.fullname,
            email:user.email,
            role:user.role,
            profileImage:user.profileImage

        },
    })
}