import { Schema, model } from "mongoose";
import { TPayment } from "./payment.interface";



const paymentSchema = new Schema<TPayment>(
    {
      phone: {
        type:String,
        required:true,
     },
     address:{
      type:String,
      required:true,
     },
     state:{
      type:String,
      required:true,
     },
     postal:{
      type:String,
      required:true,
     },
     transactionId:{
      type:String,
      required:true,
     },
     amount:{
      type:String,
      required:true,
     },
      userId: {
         type:Schema.Types.ObjectId,
         required:true,
         ref:"User"
      },
      brainTreeId: {
         type:String,
      },
      cartId: {
         type:String,
      }
    }
)

export const Payment = model<TPayment>("payment", paymentSchema)