import express from "express";
import dotenv from "dotenv";
import DBconnect from "./config/db.js";
import cors from "cors";
import authroute from "./route/user.route.js";

dotenv.config();

const app = express();

app.use(express.json())
const PORT = process.env.PORT || 5000;

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,

  })
);
app.use("/api/auth",authroute)

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, async () => {
  await DBconnect();
  console.log(`Server started on port ${PORT}`);
});

app.use((err,req,res,next)=>{
    const statuscode=err.statuscode || 500
    const message=err.message || "Internel server error "
    res.status(statuscode).json({
        success:false,
        statuscode,
        message,
    })
})
