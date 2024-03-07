import express from 'express';

const router = express.Router();
import { addOrder, deleteOrder, getOrder, getAllOrder, updateOrder } from '../controllers/order.js';
import authUser from '../middlewares/userAuth.js';
import upload  from '../middlewares/multerConfig.js';

router.post('/add', upload.none(), addOrder);
router.delete('/delete/:orderID', deleteOrder);
router.get('/get/:id', getOrder);
router.get('/all', authUser, getAllOrder);
router.put('/update/:id', updateOrder);

export default router;