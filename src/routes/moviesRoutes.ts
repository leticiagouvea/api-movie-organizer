import express from 'express';
import { validateMovie, validateMovieUpdated } from '../middlewares/joiMiddleware.js';
import { createMovie, getAllMovies, movieUpdated } from '../controllers/moviesController.js';

const router = express.Router();

router
  .post('/movies', validateMovie, createMovie)
  .get('/movies', getAllMovies)
  .put('/movies/update-movie/:movieId', validateMovieUpdated, movieUpdated);

export default router;