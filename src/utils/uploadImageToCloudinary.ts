import {v2 as cloudinary} from 'cloudinary';
import fs from "fs"
cloudinary.config({ 
  cloud_name: 'dkk2gse4e', 
  api_key: '897633246789226', 
  api_secret: 'oNlcmAd7BdsxglJ2qyASPYibYf8' 
});

const uploadImageToCloudinary = (imageName:string, filePath: string) => {
    console.log("cloudinary start");

  return new Promise((resolve, reject)=>{
    cloudinary.uploader.upload(filePath,
      { public_id: imageName }, 
      function(error, result) {
        if(error){
          reject(error)
        }
        resolve(result);
        console.log(result); 
        fs.unlink(filePath, (err)=>{
           if(err){
             console.log(err);
           }else{
            console.log("File is deleted");
           }
        })
    });
  })
}

export default uploadImageToCloudinary