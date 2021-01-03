import express from 'express';
import branchRouter from './branchRouter';
import productRouter from './productRouter';

const router = express.Router();

router.use('/branchs', branchRouter);
router.use('/products', productRouter);

export default router;
