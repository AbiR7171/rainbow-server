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
            type: String,
            required: true
        },
        discount: {
            type: String,
            required: false,
            default: "0"
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
            type: String,
            required: true,
            default:"0"
        },
        isDiscount: {
            type:Boolean,
        }
    }, {
        timestamps: true
    }
)

export const Product = model<TProduct>("Product", productSchema)