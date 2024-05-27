import User from '../models/userModel.js';


export const getUsers = async (req, res) => {

    const users = await User.find({}).limit(10);
    res.status(200).json(users);
    if (users.length < 0) {
        res.status(404).json({ message: 'No users found' });
    }
}