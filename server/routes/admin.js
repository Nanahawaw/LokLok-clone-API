import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js'
import { getUsers } from '../controllers/admin.js'


const router = express.Router();
router.get('/admin/users', isAdmin, getUsers)



export default router