import { Request, Response } from "express";
import { cartServices } from "./cart.servicet";

const addTOCart = async(req:Request,res:Response) =>{
    try {
     const data = req.body;
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
          message:"User cart find  successfully",
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
 const getSingleUserCart = async(req:Request, res:Response)=>{
   try {
    const id = req.params.id;
    const result  = await cartServices.getSingleUserCartFromDB(id);
    res.status(200).json(
      {
          success: true,
          message:"User cart find  successfully",
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
 const handleDeleteProduct = async(req:Request, res:Response)=>{
   try {
    const id = req.params.id;
    const result  = await cartServices.handleDeleteProductFromDB(id);
    res.status(200).json(
      {
          success: true,
          message:"Product delete from cart  successfully",
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
    getAllAddTOCart,
    getSingleUserCart,
    handleDeleteProduct
 }