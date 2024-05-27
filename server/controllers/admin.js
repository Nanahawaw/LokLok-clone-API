import User from '../models/userModel.js';


export const getUsers = async (req, res) => {

    const users = await User.find({}).limit(10);
    res.status(200).json(users);
    if (users.length < 0) {
        res.status(404).json({ message: 'No users found' });
    }
}

export const getUserById = async (req, res) => {
    try {

        const id = req.params.id;
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
}