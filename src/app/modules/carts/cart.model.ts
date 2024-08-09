import { Schema, model } from "mongoose";
import { TCart } from "./cart.interface";



const cartSchema = new Schema<TCart>(
    {
     product: {
        type: Schema.Types.ObjectId,
        required:true,
        ref:"Product"
     },
     user:{
        type:Schema.Types.ObjectId,
        required:true,
        ref:"User"
     },
     quantity:{
        type:Number,
        required:true
     },
     totalPrice:{
      type:Number
     }
     
    }
)

export const Cart = model<TCart>("Cart", cartSchema)