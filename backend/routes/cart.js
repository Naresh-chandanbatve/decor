import express from 'express';

const router = express.Router();
import { addCart, deleteCart, getCart } from '../controllers/cart.js';
import authUser from '../middlewares/userAuth.js';
import upload  from '../middlewares/multerConfig.js';

router.post('/add', upload.none(), addCart);
router.delete('/delete/:cartID', deleteCart);
router.get('/get', authUser, getCart);

export default router;