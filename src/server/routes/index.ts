import * as express from 'express';
import sessionsRouter from './api/blogs';

const router = express.Router();

router.use('/blogs', sessionsRouter);

export default router;