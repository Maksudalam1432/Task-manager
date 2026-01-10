import express from "express"
import { adminuser, verifyuser } from "../utils/VerifyUser.js"
import { createtask, gettask } from "../controllers/Task.controller.js"

const taskroute=express()

taskroute.post("/taskcreate",verifyuser,adminuser,createtask)
taskroute.get("/taskcreate",verifyuser , gettask)
export default taskroute