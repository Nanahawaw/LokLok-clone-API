import express from 'express';
import { registerUser, loginUser, verifyEmail, resendVerificationCode, logout } from '../controllers/auth.js';
import { emailIsVerified } from '../middlewares/emailIsVerified.js';



const router = express.Router();

router.post('/auth/register', registerUser)
router.post('/auth/verify-email', verifyEmail)
router.post('/auth/resend-verificationCode', resendVerificationCode)
router.post('/auth/login', emailIsVerified, loginUser)
router.delete('/auth/logout', logout)

export default router;