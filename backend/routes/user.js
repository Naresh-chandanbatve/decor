import express from 'express';
import authUser from '../middlewares/userAuth.js';

const router = express.Router();
import { getUser } from '../controllers/user.js';

router.get('/getUser', authUser, getUser);

export default router;