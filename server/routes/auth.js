import express from 'express';
import { registerUser, loginUser } from '../controllers/auth.js';
import { emailIsVerified } from '../middlewares/emailIsVerified.js';


const router = express.Router();

router.post('/register', registerUser)
router.post('/login', emailIsVerified, loginUser)

export default router;