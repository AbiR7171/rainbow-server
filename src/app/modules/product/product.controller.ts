import { Request, Response } from "express";
import { productServices } from "./product.service";

const createProduct = async(req:Request,res:Response) =>{
   try {
    const product = req.body;
    const file = req.file;
    console.log(product);
    const result = await productServices.createProductIntoDB(file,product);
    res.status(200).json(
        {
            success: true,
            message:"Product added successfully",
            data:result
        }
    )
   } catch (error: any) {
      res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
   }
}

const getAllProduct = async(req: Request, res:Response)=>{
  try {
    const result = await productServices.getAllProductsFromDB();
    res.status(200).json(
        {
            success: true,
            message:"Product added successfully",
            data:result
        }
    )
  } catch (error: any) {
    res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
  }
}

const getSearchProduct = async(req:Request, res: Response)=>{
    try {
        const {search} = req.query;
        const result =await productServices.getSearchProductFromDB(search as string);
        res.status(200).json(
          {
              success: true,
              message:"Search product find successfully",
              data:result
          }
      )
    } catch (error: any) {
      res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
    }
}

const getSingleProduct = async(req:Request, res:Response)=>{
    try {
      const productId = req.params.id;
      const result= await productServices.getSingleProductFromDB(productId);
      res.status(200).json(
        {
            success: true,
            message:"Product find successfully",
            data:result
        }
    )
    } catch (error : any) {
      res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
    }
}

const editProduct = async(req:Request, res:Response)=>{
 try {
  const productId = req.params.id;
  const product = req.body;
  const result = await productServices.editProductFromDB(productId, product);
  res.status(200).json(
    {
        success: true,
        message:"product edited  successfully",
        data:result
    }
)
 } catch (error: any) {
  console.log(error);
  res.status(500).json(
    {
        success: false,
        message: error.message ||"something went wrong",
        data:error 
    }
  )
 }
}

const deleteProduct = async(req:Request, res:Response)=>{
    try {
        const productId = req.params.id;
        const result =await productServices.deleteProductFromDB(productId);
        res.status(200).json(
          {
              success: true,
              message:"product Deleted  successfully",
              data:result
          })
    } catch (error:any) {
      res.status(500).json(
        {
            success: false,
            message: error.message ||"something went wrong",
            data:error 
        }
      )
    }
}

const getFlashDiscount = async(req:Request, res:Response)=>{
  try {
      const result =await productServices.getFlashDiscountFromDB();
      res.status(200).json(
        {
            success: true,
            message:"Flash discount item find  successfully",
            data:result
        })
  } catch (error:any) {
    res.status(500).json(
      {
          success: false,
          message: error.message ||"something went wrong",
          data:error 
      }
    )
  }
}

const suggestForYouProduct = async(req:Request, res:Response)=>{
  try {
      const result =await productServices.suggestForYouProductFromDB();
      res.status(200).json(
        {
            success: true,
            message:"Flash discount item find  successfully",
            data:result
        })
  } catch (error:any) {
    res.status(500).json(
      {
          success: false,
          message: error.message ||"something went wrong",
          data:error 
      }
    )
  }
}
const topSellProduct = async(req:Request, res:Response)=>{
  try {
      const result =await productServices.topSellProductFromDB();
      res.status(200).json(
        {
            success: true,
            message:"Flash discount item find  successfully",
            data:result
        })
  } catch (error:any) {
    res.status(500).json(
      {
          success: false,
          message: error.message ||"something went wrong",
          data:error 
      }
    )
  }
}

const handleIsSuggestForU = async(req:Request, res:Response)=>{
  try {
      const productId = req.params.id;
      const result =await productServices.handleIsSuggestForUFromDB(productId);
      res.status(200).json(
        {
            success: true,
            message:"Suggest For You change successfully",
            data:result
        })
  } catch (error:any) {
    res.status(500).json(
      {
          success: false,
          message: error.message ||"something went wrong",
          data:error 
      }
    )
  }
}


export const productController = {
      createProduct,
      getAllProduct,
      getSearchProduct,
      editProduct,
      getSingleProduct,
      deleteProduct,
      getFlashDiscount,
      handleIsSuggestForU,
      suggestForYouProduct,
      topSellProduct
}