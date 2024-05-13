import express from "express";
import { userController } from "./user.controller";
import multer from "multer"
const route = express.Router();
const storage = multer.diskStorage({
    destination: function (req, file, cb){
        cb(null, "uploads/");
    },
    filename: function(req, file, cb){
        const uniqueSuffix = Date.now();
         cb(null, uniqueSuffix + file.originalname)
    }
})
const upload = multer({storage: storage});

route.post("/create-user",upload.single("image"), userController.createUser)

export const userRoute = route;