import Branch from '../models/Branch';
import {
  createOne,
  getAll,
} from './Factory';

export const createBranch = createOne(Branch);
export const getBranchs = getAll(Branch);
