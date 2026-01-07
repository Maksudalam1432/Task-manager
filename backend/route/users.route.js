import express from "express"
import { adminuser, verifyuser } from "../utils/VerifyUser.js"
import { getusers } from "../controllers/user.controller.js"

const route=express.Router()
route.get("/getuser",verifyuser,adminuser,getusers)

export default route