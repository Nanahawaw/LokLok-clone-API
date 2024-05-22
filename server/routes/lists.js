import express from 'express';
import { listMovies } from '../controllers/list.js'

const router = express.Router();

router.get('/api/list-movies', listMovies)

export default router