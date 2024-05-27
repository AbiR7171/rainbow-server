import express from "express";
import { categoryController } from "./categroy.controller";
const route = express.Router();

route.post("/create-category",categoryController.createCategory)
route.get("/categories",categoryController.getAllCategory)


export const categoryRoute = route;