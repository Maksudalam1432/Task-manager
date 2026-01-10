import Task from "../Model/Task.model.js";
import { errorhandle } from "../utils/Error.js";

export const createtask = async (req, res, next) => {
  try {
    const {
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      todoChecklist,
    } = req.body;
    if (!Array.isArray(assignedTo)) {
      return next(errorhandle(400, "assigned to must bean array of user IDs"));
    }

    const task = await Task.create({
      title,
      description,
      priority,
      dueDate,
      assignedTo,
      attachments,
      todoChecklist,
      createdBy:req.user.id
    });
    res.status(200).json({message:"Task Create Succesfully",Task})
  } catch (error) {
    next(error);
  }
};


export const gettask=async(req,res,next)=>{

  try {
    
  } catch (error) {
    next(error)
  }
} 