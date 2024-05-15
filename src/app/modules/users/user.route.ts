import express from "express";
import { userController } from "./user.controller";
import upload from "../../../utils/Multer";

const route = express.Router();


route.post("/create-user",upload.single("image"), userController.createUser)

export const userRoute = route;