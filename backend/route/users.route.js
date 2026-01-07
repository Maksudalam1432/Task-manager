import express from "express"
import { adminuser, verifyuser } from "../utils/VerifyUser.js"
import { getuserbyid, getusers } from "../controllers/user.controller.js"

const route=express.Router()
route.get("/getuser",verifyuser,adminuser,getusers)
route.get("/:id",verifyuser,getuserbyid)

export default route