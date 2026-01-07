
    import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "low",
    },
    status: {
      type: String,
      enum: ["pending", "inprogress", "completed"],
      default: "pending",
    },
    dueDate: {
      type: Date,
      required:true,
    },

    assignedTo:[ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
],
    createdBy: [ {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
],
    attachments: [
      {
        type: String,
      },
    ],
    todoChecklist: [todoSchema],
    progress: {
      type: Number,
     min:0,
     max:100,
      default: 0,
    },
  },
  { timestamps: true }
);

const task=mongoose.model("Task", taskSchema);
export default task
