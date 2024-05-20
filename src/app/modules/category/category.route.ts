import express from "express";
import { categoryController } from "./categroy.controller";
const route = express.Router();

route.post("/create-category",categoryController.createCategory)


export const categoryRoute = route;