import express from "express"
import { adminuser, verifyuser } from "../utils/VerifyUser.js"
import { createtask } from "../controllers/Task.controller.js"

const taskroute=express()

taskroute.post("/taskcreate",verifyuser,adminuser,createtask)
export default taskroute