import express from 'express';

const router = express.Router();
import { signup, verifyEmail, signin,forgotpass, resetpass  } from '../controllers/auth.js';
import session from '../middlewares/session.js';
import authUser from '../middlewares/userAuth.js';


router.post('/signup', signup);
router.get('/verify', verifyEmail);
router.post('/signin',session, signin);
router.post('/forgot', forgotpass);
router.post('/reset',authUser, resetpass);

export default router;