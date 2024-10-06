import { TCart } from "./cart.interface";
import { Cart } from "./cart.model";

const addToCartInToDB = async(category:TCart)=>{
     const result = await Cart.create(category);
     return result
}
const getAllCartFromDB = async()=>{
     const result = await Cart.find().populate("user").populate("product");
     return result
}
const getSingleUserCartFromDB = async(id:string)=>{
     const result = await Cart.find({user:id}).populate("product");
     return result
}
const handleDeleteProductFromDB = async(id:string)=>{
     const result = await Cart.deleteOne({_id:id});
     return result
}
export const cartServices = {
    addToCartInToDB,
    getAllCartFromDB,
    getSingleUserCartFromDB,
    handleDeleteProductFromDB
}