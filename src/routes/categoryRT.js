import { categoryCreate, categoryUpdate, categoryDelete, getAllCategories } from '../controllers/categoryCT.js'
import express from 'express';

const router = express.Router();

router.post('/', categoryCreate);
router.put('/:id', categoryUpdate);
router.delete('/:id', categoryDelete);
router.get('/', getAllCategories);

export default router;