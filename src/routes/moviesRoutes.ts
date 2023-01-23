import express from 'express';
import { validateMovie, validateMovieUpdated } from '../middlewares/joiMiddleware.js';
import { createMovie, deleteMovie, getAllMovies, getQuantityMoviesByGenre, movieUpdated } from '../controllers/moviesController.js';

const router = express.Router();

router
  .post('/movies', validateMovie, createMovie)
  .get('/movies', getAllMovies)
  .put('/movies/update-movie/:movieId', validateMovieUpdated, movieUpdated)
  .delete('/movies/delete-movie/:movieId', deleteMovie)
  .get('/movies/quantity-by-genre', getQuantityMoviesByGenre);

export default router;