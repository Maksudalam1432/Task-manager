import express, { Router } from "express"
import { login, Signup, updateprofile, uploadimage, userProfile } from "../controllers/Auth.controller.js"
import { verifyuser } from "../utils/VerifyUser.js"
import upload from "../utils/multer.js"

const authroute=express(Router())

authroute.post("/signup",Signup)
authroute.post("/login",login)
authroute.get("/userprofile",verifyuser,userProfile)
authroute.put("/updateprofile",verifyuser,updateprofile)
authroute.post("/uploadimage",upload.single("image"),uploadimage)

export default authroute