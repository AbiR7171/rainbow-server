import { TCategory } from "./category.interface";
import { Category } from "./category.model";

const createCategoryInToDB = async(category:TCategory)=>{
     const result = await Category.create(category);
     return result
}
export const categoryServices = {
    createCategoryInToDB
}