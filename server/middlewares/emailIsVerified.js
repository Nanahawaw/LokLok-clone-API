import User from "../models/User.js";

export const emailIsVerified = async (req, res, next) => {
    try {
        const { email } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(404).json({ message: 'User not found ' })
        } else
            if (user && user.emailIsVerified === false) {
                return res.status(401).json({ message: 'Email is not verified' })
            }
            else {
                next()
            }
    } catch (error) {
        next(error)
    }
}