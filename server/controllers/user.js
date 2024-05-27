import User from "../models/userModel.js";

export const deleteAccount = async (req, res) => {
    try {
        const user = req.user
        const findUser = await User.findByIdAndDelete(user.id);
        if (!findUser) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "acccount deleted" });


    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}