import express from 'express';
import {
  createBranch,
  getBranchs,
} from '../controllers/branchsController';

const router = express.Router();

router.post('/', createBranch);
router.get('/', getBranchs);

export default router;
