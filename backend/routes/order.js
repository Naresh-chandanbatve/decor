import express from 'express';

const router = express.Router();
import { addOrder, deleteOrder, getOrder, getAllOrder } from '../controllers/order.js';
import upload  from '../middlewares/multerConfig.js';

router.post('/add', upload.none(), addOrder);
router.delete('/delete/:orderID', deleteOrder);
router.get('/get/:id', getOrder);
router.get('/all', getAllOrder);

export default router;