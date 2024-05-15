import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";
import { TUser } from "./user.interface";
import { User } from "./user.model";

interface CloudinaryResponse {
  secure_url: string;
  
}

const createUserIntoDB = async(file:any,user: TUser)=>{
      const {password,confirmPassword } = user;
      if(password !== confirmPassword){
        throw new Error("Confirm password dose not match")
      }
      const imageName =  `user-image-${user.firstName}-${user.lastName}`
      const {secure_url}  = await uploadImageToCloudinary(imageName, file.path) as { secure_url: string };
      
      const userData = {
         ...user,
         image: secure_url
      }
       
     const result = await User.create(userData);
     return result
}


export const userServices = {
    createUserIntoDB
}