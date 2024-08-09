import express from "express";
import { cartController } from "./cart.controller";
const route = express.Router();

route.post("/add-cart",cartController.addTOCart)
route.get("/carts",cartController.getAllAddTOCart)
route.get("/user-cart/:id",cartController.getSingleUserCart)


export const cartRoute = route;