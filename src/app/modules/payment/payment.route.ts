import express from "express";
import { paymentController } from "./payment.controller";
const route = express.Router();

route.post("/add-checkout",paymentController.addToCheckout)



export const paymentRoute = route;