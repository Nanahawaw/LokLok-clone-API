import User from '../models/userModel.js';
import bcrypt from 'bcrypt'
import { sendEmail } from "../utils/sendEmail.js";
import { generateOtp } from "../utils/otpGenerator.js";
import jwt from 'jsonwebtoken';

export const registerUser = async (req, res) => {
    try {
        const { otp, secret } = generateOtp()
        const newUser = new User({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
            otpSecret: secret

        })
        const user = await newUser.save();
        //verify email by sending otp
        const emailOptions = {
            to: user.email,
            subject: `To verify your account , please enter the following verification code on LOKLOK: ${otp}. The veriication code expires in 1 hour. if you do not request the code please ignore this message
            `
        }
        await sendEmail(emailOptions)
        return res.status(200).json({ user: { email: user.email }, otp });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

export const verifyEmail = async (req, res) => {
    try {
        const { email, otp } = req.body;

        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found' })
        }
        //verify the otp
        const isValid = speakeasy.totp.verify({
            secret: user.otpSecret,
            encoding: 'base32',
            token: otp
        })
        if (!isValid) {
            return res.status(400).json({ message: 'Invalid verification code' });
        }
        user.emailIsVerified = true;
        await user.save();

        return res.status(200).json({ message: 'Email verified successfully' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const findUser = await User.findOne({ email })
        if (!findUser) {
            return res.status(404).json({ message: 'User not found' })
        }
        const isPassWordMatched = await bcrypt.compare(findUser.password, password)
        if (!isPassWordMatched) {
            return res.status(401).json({ message: 'Invalid email or password' })
        }
        const token = jwt.sign({ id: findUser._id, isAdmin: findUser.isAdmin }, process.env.JWT_SECRET)
        //store token in cookies
        res.cookies({
            'accessToken': token,
            httpOnly: true
        })
        return res.status(200).json({ message: 'Login successfull', findUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}