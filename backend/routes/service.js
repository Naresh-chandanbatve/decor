import express from 'express';

const router = express.Router();
import { addService, deleteService, getService, getAllService } from '../controllers/service.js';
import upload  from '../middlewares/multerConfig.js';
import session from '../middlewares/session.js';
import { getImageByName } from '../controllers/service.js';

router.post('/add',upload.single('image'), addService);
router.delete('/delete', deleteService);
router.get('/get/:id', getService);
router.get('/getImage/:filename', getImageByName);
router.get('/all', getAllService);

export default router;