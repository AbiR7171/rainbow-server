import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";

const addToCartInToDB = async(category:TCart)=>{
     const result = await Cart.create(category);
     return result
}
const getAllCartFromDB = async()=>{
     const result = await Cart.find();
     return result
}
export const cartServices = {
    addToCartInToDB,
    getAllCartFromDB
}