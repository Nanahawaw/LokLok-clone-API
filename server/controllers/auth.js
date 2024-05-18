import User from "../models/User.js";

export const registerUser = async (req, res) => {
    try {
        const newUser = new User({
            email: req.body.email,
            password: req.body.password,

        })
        const user = await newUser.save();
        //verify email by sending otp
    } catch (error) {

    }
}