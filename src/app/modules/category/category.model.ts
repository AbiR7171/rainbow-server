import { Schema, model } from "mongoose";
import { TCategory } from "./category.interface";


const categorySchema = new Schema<TCategory>(
    {
     category: {
        type: String
     } 
     
    }
)

export const Category = model<TCategory>("Category", categorySchema)