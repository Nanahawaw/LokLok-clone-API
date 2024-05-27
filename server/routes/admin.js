import express from 'express';
import { isAdmin } from '../middlewares/isAdmin.js'
import { getUsers, getUserById } from '../controllers/admin.js'


const router = express.Router();
router.get('/admin/users', isAdmin, getUsers)
router.get('/admin/:id', isAdmin, getUserById)



export default router