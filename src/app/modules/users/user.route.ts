import express from "express";
import { userController } from "./user.controller";
import upload from "../../../utils/Multer";

const route = express.Router();


route.post("/create-user",upload.single("image"), userController.createUser)
route.get("/single-user/:id", userController.getSingleUser)
route.get("/isAdmin", userController.getAdmin)
route.get("/login", userController.getSingleUserUsingEmail)

export const userRoute = route;