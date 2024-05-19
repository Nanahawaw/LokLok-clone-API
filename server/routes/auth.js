import express from 'express';
import { registerUser, loginUser, verifyEmail } from '../controllers/auth.js';
import { emailIsVerified } from '../middlewares/emailIsVerified.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/verify-email', verifyEmail)
router.post('/login', emailIsVerified, loginUser)

export default router;