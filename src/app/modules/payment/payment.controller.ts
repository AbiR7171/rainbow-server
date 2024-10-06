import { Request, Response } from "express";
import { paymentServices } from "./payment.services";

const addToCheckout = async(req:Request,res:Response) =>{
    try {
      const payment = req.body;
      console.log(payment, "controller payment");
      const result = await paymentServices.addToCheckoutInToDB(payment);
      console.log(result, "controller result")
      res.status(200).json(
        {
            success: true,
            message:"Payment successful",
            data:result
        }
    )
      
      
    } catch (error: any) {
       res.status(500).json(
         {
             success: false,
             message: error.message ||"something went wrong",
             data:error 
         }
       )
    }
 }


 export const  paymentController = {
  addToCheckout
}