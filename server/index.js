import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

mongoose.connect(process.env.MONGO, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to Mongoose')
}
).catch((err) => console.log(err))

const app = express();
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})