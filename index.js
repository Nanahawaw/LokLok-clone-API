import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';


dotenv.config();

mongoose.connect(process.env.MONGO
).then(() => {
    console.log('Connected to Mongoose')
}
).catch((err) => console.log(err))

const app = express();

/// Serve Swagger UI from GitHub Pages
const swaggerUrl = 'https://Nanahawaw.github.io/LokLok-clone-API/swagger-output.json';
app.use(
    '/api-docs',
    swaggerUi.serve,
    swaggerUi.setup({
        swaggerUrl,
    })
);
app.use(express.json());
app.use(cors())
app.use(cookieParser());


//routes
app.use('/api/auth', authRouter)
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})