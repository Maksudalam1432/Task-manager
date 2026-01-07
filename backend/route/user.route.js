import express, { Router } from "express"
import { login, Signup, userProfile } from "../controllers/Auth.controller.js"
import { verifyuser } from "../utils/VerifyUser.js"

const authroute=express(Router())

authroute.post("/signup",Signup)
authroute.post("/login",login)
authroute.get("/userprofile",verifyuser,userProfile)

export default authroute