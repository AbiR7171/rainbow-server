import express from "express";
import { productController } from "./product.controller";
const route = express.Router();

route.post("/add-product", productController.createProduct)

export const productRoute = route;