import express from 'express';

const router = express.Router();
import { createOrder, getOrder, payment, order} from '../controllers/cashfree.js';
import authUser from '../middlewares/userAuth.js'

router.get('/create/:total_amount', authUser, createOrder);
router.get('/get/:order_id', getOrder);
router.post('/payment', payment);
router.get('/order/:userID', order);

export default router;