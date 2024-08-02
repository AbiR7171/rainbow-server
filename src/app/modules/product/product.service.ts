import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProductIntoDB = async(file:any,product: TProduct)=>{
    const imageName =  `product-image-${product.productName}`
    const {secure_url}  = await uploadImageToCloudinary(imageName, file.path) as { secure_url: string };
    
    const productData = {
       ...product,
       image: secure_url
    }
     const res = await Product.create(productData)
     return res
}
const getAllProductsFromDB = async() =>{
    const  result = await Product.find().sort({_id:-1});
    return result
 }

 const getSearchProductFromDB = async(search:string) =>{
       const result = await Product.find({productName: {$regex:search, $options:"i"}});
       return result;
 }

 const getSingleProductFromDB = async(id:string)=>{
       const result = await Product.findById({_id: id});
       return result
 }

 const editProductFromDB = async(id:string,product:TProduct) =>{
        const result = await Product.findByIdAndUpdate(id, product, {
            new:true
        })
        return result
 }

 const deleteProductFromDB = async(id: string) =>{
      const result = await Product.deleteOne({_id:id})
      return result
 }
 const  getFlashDiscountFromDB = async() =>{
      const result = await Product.find({discount:{$gt:0}})
      return result
 }

export  const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSearchProductFromDB,
    editProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    getFlashDiscountFromDB
}


