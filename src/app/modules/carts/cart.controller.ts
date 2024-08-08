import { Request, Response } from "express";
import { cartServices } from "./cart.servicet";

const addTOCart = async(req:Request,res:Response) =>{
    try {
     const data = req.body;
     console.log(data);
     const result = await cartServices.addToCartInToDB(data);
     res.status(200).json(
         {
             success: true,
             message:"Product added Cart successfully",
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
 const getAllAddTOCart = async(req:Request, res:Response)=>{
   try {
    const result  = await cartServices.getAllCartFromDB();
    res.status(200).json(
      {
          success: true,
          message:"All category find  successfully",
          data:result
      }
  )
   } catch (error : any) {
    res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
   }
 }

 export const cartController = {
    addTOCart,
    getAllAddTOCart
 }