import {GridFsStorage} from 'multer-gridfs-storage';
import crypto from 'crypto'
import path from 'path';
import * as dotenv from 'dotenv';
dotenv.config();
 const storage = new GridFsStorage({
  url: process.env.MONGO_URL,
  file:async (req, file) => {
    try {
      return new Promise((resolve, reject) => {
        crypto.randomBytes(16, (err, buf) => {
          if (err) {
            return reject(err);
          }
          else{
            const filename = buf.toString('hex') + path.extname(file.originalname);
            const fileInfo = {
              filename: filename,
              bucketName: 'uploads'
            };
            console.log(fileInfo);
            resolve(fileInfo);
          }
         
        });
      });
    } catch (error) {
      console.error(error);
    }
     
   
  }
});

export default storage;