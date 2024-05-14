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
            required: false
        },
        image: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)

export const Product = model<TProduct>("Product", productSchema)