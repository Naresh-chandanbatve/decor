import express from 'express';

const router = express.Router();
import { signup, verifyEmail, signin,  } from '../controllers/auth.js';
import session from '../middlewares/session.js';

router.post('/signup', signup);
router.get('/verify', verifyEmail);
router.post('/signin',session, signin);

export default router;