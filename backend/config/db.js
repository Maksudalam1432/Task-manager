import mongoose  from "mongoose";

  const DBconnect=async()=>{
    try{

        await mongoose.connect(process.env.MONGO_URL)
        console.log("DB connected succesfully")
        
        
    }
    catch(error){
        console.log("DB connected Failed")
         
    }
  }

  export default DBconnect