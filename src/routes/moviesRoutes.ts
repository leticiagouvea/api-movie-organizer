import express from 'express';
import { validateMovie } from '../middlewares/joiMiddleware.js';
import { createMovie, getAllMovies } from '../controllers/moviesController.js';

const router = express.Router();

router
  .post('/movies', validateMovie, createMovie)
  .get('/movies', getAllMovies);

export default router;