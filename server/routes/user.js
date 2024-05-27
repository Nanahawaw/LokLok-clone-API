import express from 'express';
import { isAuthenticated } from '../middlewares/isAuthenticated.js'
import { deleteAccount } from '../controllers/user.js'



const router = express.Router();
router.delete("/user/deleteAccount/:id", isAuthenticated, deleteAccount)


export default router