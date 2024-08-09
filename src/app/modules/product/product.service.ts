import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";
import { calculateDiscountPrice } from "../../../utils/util";
import { TProduct } from "./product.interface";
import { Product } from "./product.model";


const createProductIntoDB = async(file:any,product: TProduct)=>{
    const imageName =  `product-image-${product.productName.replace(/\s+/g, '')}`
    const {secure_url}  = await uploadImageToCloudinary(imageName, file.path) as { secure_url: string };
    const discountedPrice = calculateDiscountPrice(product.price, product.discount as number);
    console.log(discountedPrice);
    
    const productData = {
       ...product,
       image: secure_url,
       discountedPrice
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
 const  suggestForYouProductFromDB = async() =>{
      const result = await Product.find({isSuggestForU:true})
      return result
 }
 const  getProductByCategoryFormDB = async(category:string) =>{
      const result = await Product.find({category:category})
      return result
 }
 const  topSellProductFromDB = async() =>{
      const result = await Product.find().sort({sell:-1}).limit(8)
      return result
 }
 const handleIsSuggestForUFromDB = async(id:string)=>{
      const item = await Product.findById(id);
      if (!item) {
       throw Error("Item not found");
      }
       item.isSuggestForU = !item?.isSuggestForU;
       const result = await item.save();
       return result
 }

export  const productServices = {
    createProductIntoDB,
    getAllProductsFromDB,
    getSearchProductFromDB,
    editProductFromDB,
    getSingleProductFromDB,
    deleteProductFromDB,
    getFlashDiscountFromDB,
    handleIsSuggestForUFromDB,
    suggestForYouProductFromDB,
    topSellProductFromDB,
    getProductByCategoryFormDB
}


