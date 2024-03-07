import express from 'express';
import authUser from '../middlewares/userAuth.js';

const router = express.Router();
import { getUser, updateUser } from '../controllers/user.js';

router.get('/getUser', authUser, getUser);
router.put('/update', authUser, updateUser);

export default router;