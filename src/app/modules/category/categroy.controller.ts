import { Request, Response } from "express";
import { TCategory } from "./category.interface";
import { categoryServices } from "./category.service";

const createCategory = async(req:Request,res:Response) =>{
    try {
     const data = req.body;
     const result = await categoryServices.createCategoryInToDB(data);
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

 export const categoryController = {
     createCategory
 }