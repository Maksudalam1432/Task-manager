import Task from "../Model/Task.model.js";
import User from "../Model/User.model.js";
import { errorhandle } from "../utils/Error.js";

export const getusers = async (req, res, next) => {
  try {
    const users = await User.find({ role: "user" }).select("-password");

    const userwithtaskcount = await Promise.all(
      users.map(async (user) => {
        const pendingTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "pending",
        });

        const progressTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "inprogress", // ✅ fixed
        });

        const completedTask = await Task.countDocuments({
          assignedTo: user._id,
          status: "completed",
        });

        return {
          ...user._doc,
          pendingTask,
          progressTask,
          completedTask,
        };
      })
    );

    res.status(200).json({
      success: true,
      users: userwithtaskcount,
    });
  } catch (error) {
    next(error);
  }
};

export const getuserbyid=async(req,res,next)=>{
   try {
    const user=await User.find(req.params._id).select("-password")

    if(!user){
       return next(errorhandle(404,"User Not Found"))
    }
    res.status(200).json(user)
   } catch (error) {
    return next(error)
   }
}