import { NextFunction, Request, Response } from "express";
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


export const userController = {
    createUser
}