import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePic: { type: String, default: "" },
    isAdmin: { type: Boolean, default: false },
    emailIsVerified: { type: Boolean, default: false },
    otp: { type: String }
}, { timestamps: true })

const User = mongoose.model('User', UserSchema)
export default User;