import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async(req:Request,res:Response) =>{
   try {
    const {product} = req.body;
    const result = productServices.createProductIntoDB(product);
    res.status(200).json(
        {
            success: true,
            message:"Product added successfully",
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

export const productController = {
      createProduct
}