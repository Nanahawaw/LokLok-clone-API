import express from 'express';
import { registerUser, loginUser, verifyEmail, logout } from '../controllers/auth.js';
import { emailIsVerified } from '../middlewares/emailIsVerified.js';


const router = express.Router();

router.post('/auth/register', registerUser)
router.post('/auth/verify-email', verifyEmail)
router.post('/auth/login', emailIsVerified, loginUser)
router.delete('/auth/logout', logout)

export default router;