import express from "express";
import { productController } from "./product.controller";
import upload from "../../../utils/Multer";
const route = express.Router();

route.post("/add-product", upload.single("image"),productController.createProduct)
route.get("/products",productController.getAllProduct)
route.get("/search-products",productController.getSearchProduct)
route.get("/single-product/:id",productController.getSingleProduct)
route.put("/search-products",productController.editProduct)

export const productRoute = route;