import express, { Router } from "express"
import { Signup } from "../controllers/Auth.controller.js"

const authroute=express(Router())

authroute.post("/signup",Signup)

export default authroute