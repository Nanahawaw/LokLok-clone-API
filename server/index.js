import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import userRouter from './routes/user.js'
import adminRouter from './routes/admin.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


dotenv.config();

mongoose.connect(process.env.MONGO
).then(() => {
    console.log('Connected to Mongoose')
}
).catch((err) => console.log(err))

const app = express();


// Configure CORS
const corsOptions = {
    origin: ['http://localhost:8000', 'https://nanahawaw.github.io/LokLok-clone-API/'],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
};


/// Serve Swagger UI from GitHub Pages
const swaggerDocument =
    JSON.parse(fs.readFileSync(join(__dirname, '../server/swagger-output.json'), 'utf-8'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
app.use(express.json());
app.use(cors())
app.use(cookieParser());


//routes
app.use('/api', authRouter)
app.use('/api', userRouter)
app.use('/api', adminRouter)
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})