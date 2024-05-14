import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProductIntoDB = async(product: TProduct)=>{
     const res = Product.create(product)
     return res
}

export  const productServices = {
    createProductIntoDB,
}