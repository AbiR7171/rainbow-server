import uploadImageToCloudinary from "../../../utils/uploadImageToCloudinary";
import { TUser } from "./user.interface";
import { User } from "./user.model";



const createUserIntoDB = async(file:any,user: TUser)=>{
  console.log(file, "file form user service");
      const {password,confirmPassword } = user;
      if(password !== confirmPassword){
        throw new Error("Confirm password dose not match")
      }
      if(file){
        const imageName =  `user-image-${user.firstName}-${user.lastName}`
        const {secure_url}  = await uploadImageToCloudinary(imageName, file.path) as { secure_url: string };
        
        const userData = {
           ...user,
           image: secure_url
        }
         
       const result = await User.create(userData);
       return result
  }else{
    const userData = {
      ...user,
      image: "https://img.freepik.com/premium-photo/human-icon-3d-render-illustration_567294-3798.jpg?w=740"
   }
    const result = await User.create(userData);
    return result
  }
      }

 const getSingleUserFormDB = async(id:string) =>{
          console.log(id);
          const result = await User.findById({_id:id})
          return result
 }
 const getSingleUserUsingEmailFormDB = async(email:string) =>{
          const result = await User.findOne({email:email})
          return result
 }
const getAdminFromDB = async(email:string) =>{
  const query = {email: email};
  const user = await User.findOne(query);
  console.log(user)
  const result = {admin : user?.role == "admin"};
  console.log(result, "result from admin")
  return result
}
     


export const userServices = {
    createUserIntoDB,
    getSingleUserFormDB,
    getAdminFromDB,
    getSingleUserUsingEmailFormDB
}