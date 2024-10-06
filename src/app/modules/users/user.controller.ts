import e, { NextFunction, Request, Response } from "express";
import { userServices } from "./user.services";

const createUser = async(req:Request, res: Response , next: NextFunction)=>{
    try {
         const user = req.body;
         const file = req.file;
         console.log(req.file, "file");
         const result = await userServices.createUserIntoDB(file, user);

         res.status(200).json(
            {
                success: true,
                message:"user Register successfully",
                data: result
            }
         )
    } catch (error: any) {
        console.log(error, "=>createUser");
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error,
          });
    }
}
const getSingleUser = async(req:Request, res: Response , next: NextFunction)=>{
    try {
         const id = req.params.id;
         const result = await userServices.getSingleUserFormDB(id);
         console.log(result);

         res.status(200).json(
            {
                success: true,
                message:"Find user successfully",
                data: result
            }
         )
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error,
          });
    }
}
const getAdmin = async(req:Request, res:Response) =>{
    try {
        const {email} =req.query;
        console.log(email, "email form getAdmin")
        const result = await userServices.getAdminFromDB(email as string);
        res.status(200).json(
          {
              success: true,
              message:"getAdmin find successfully",
              data: result
          }
       )
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error,
          });
    }
}
const getSingleUserUsingEmail = async(req:Request, res:Response) =>{
    try {
        const {email} =req.query;
        console.log(email, "email form getAdmin")
        const result = await userServices.getSingleUserUsingEmailFormDB(email as string);
        res.status(200).json(
          {
              success: true,
              message:"user find successfully",
              data: result
          }
       )
    } catch (error: any) {
        return res.status(500).json({
            success: false,
            message: error.message,
            error: error,
          });
    }
}


export const userController = {
    createUser,
    getSingleUser,
    getAdmin,
    getSingleUserUsingEmail
}