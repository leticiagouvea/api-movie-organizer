import express from 'express';
import { validateGenre } from '../middlewares/joiMiddleware.js';
import { createGenre } from '../controllers/genresController.js';

const router = express.Router();

router
  .post('/genres', validateGenre, createGenre);

export default router;