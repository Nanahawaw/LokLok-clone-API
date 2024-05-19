import User from "../models/User.js";
import bcrypt from 'bcrypt'
import { sendEmail } from "../utils/sendEmail.js";

export const registerUser = async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10),

        })
        const user = await newUser.save();
        //verify email by sending otp
        const otp = 
        const emailOptions = {
            to: user.email
            subject: `To verify your account , please enter the following verification code on LOKLOK: ${otp}. The veriication code expires in 1 hour. if you do not request the code please ignore this message
            `
        }



    } catch (error) {

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
        return res.status(200).json({ message: 'Login successfull', findUser })
    } catch (error) {
        console.log(error)
        return res.status(500).json({ message: error.message })
    }
}