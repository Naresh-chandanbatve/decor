import multer from 'multer';
import  storage  from './gridfsConfig.js';
 const upload = multer({ storage });
 export default upload;