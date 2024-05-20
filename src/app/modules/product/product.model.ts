import { Schema, model } from "mongoose";
import { TProduct } from "./product.interface";

const productSchema = new Schema<TProduct>(
    {
        productName: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        sell: {
            type: Number,
            required: true,
            default:0
        },
        discount:{
            type:Number,
        },
        isDiscount: {
            type:Boolean
        }
    }, {
        timestamps: true
    }
)

export const Product = model<TProduct>("Product", productSchema)