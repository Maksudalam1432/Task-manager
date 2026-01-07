import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
    },

    profileImage: {
      type: String,
      default:
        "https://imgs.search.brave.com/UgN_32Tu3obHc6hf29FVGiada9UL6RIM7PGywO_kZ4o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS12ZWN0/b3IvdXNlci1jaXJj/bGUtd2l0aC1ibHVl/LWdyYWRpZW50LWNp/cmNsZV83ODM3MC00/NzI3LmpwZz9zZW10/PWFpc19oeWJyaWQm/dz03NDAmcT04MA",
    },

    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },

    
  },
  { timestamps: true }
);

const User=mongoose.model("User", UserSchema);
export default User;
