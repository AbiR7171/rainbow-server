import { Schema, model } from "mongoose";
import { TUser } from "./user.interface";

const userSchema = new Schema<TUser>(
    {
        firstName: { type: String, required: [true, "First Name is required"] },
        lastName: {
          type: String,
          required: [true, "Last Name is required"]
        },
        email: {
          type: String,
          required: [true, "Email is required"],
          unique: true,
        },
        password:{
            type: String, required:[true, "password is required",],minlength:[6, "password must contain 6 letter"]
        },
        confirmPassword:{
            type: String
        },
        number: {
            type: String,  required:[true, "Mobile is required",]
        },
        image: {
          type: String
        },
         role: {
          type: String, enum:["user", "admin"], default: "user" 
         },
         brainTreeId: {
          type: String,unique:true
         }
      },
      {
        timestamps: true,
      }
)

export const User = model<TUser>("User", userSchema)