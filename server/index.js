import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import authRouter from './routes/auth.js'
import cookieParser from 'cookie-parser';
import cors from 'cors'
import swaggerUi from 'swagger-ui-express';
import fs from 'fs';
import path from 'path';

dotenv.config();

mongoose.connect(process.env.MONGO
).then(() => {
    console.log('Connected to Mongoose')
}
).catch((err) => console.log(err))

const app = express();

// Check if swagger-output.json exists before importing it
const swaggerOutputPath = path.resolve('swagger-output.json');
if (fs.existsSync(swaggerOutputPath)) {
    const swaggerFile = JSON.parse(fs.readFileSync(swaggerOutputPath, 'utf-8'));
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));
} else {
    console.error('Swagger output file not found. Please run the swagger.js script first.');
}
app.use(express.json());
app.use(cors())
app.use(cookieParser());


//routes
app.use('/api/auth', authRouter)
app.listen(8000, () => {
    console.log('Server is running on port 8000');
})