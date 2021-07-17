import { Router } from 'express';

import callmeController from '../controllers/callme';
import checkSpamMiddleware from '../middleWare/checkSpam';

const router = Router();

router.post('/callme', checkSpamMiddleware, callmeController);

export default router;
