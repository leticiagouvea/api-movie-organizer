import { Request, Response } from "express";
import { Movie, MovieUpdated } from "../protocols/protocols.js";
import { 
  insertMovie,
  readMovieName,
  readMovieById,
  readAllMovies,
  updateMovie,
  deleteMovieById,
  readQuantityMoviesByGenre
} from "../repositories/moviesRepository.js";


export async function createMovie(req: Request, res: Response) {
  const movie = res.locals.movie as Movie;

  try {
    const movieExists = await readMovieName(movie.name);

    if (movieExists) {
      return res.status(400).send('This movie already exists');
    }

    await insertMovie(movie);
    res.status(201).send('Movie successfully created!');

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await readAllMovies();

    res.status(200).send(movies);

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export async function movieUpdated(req: Request, res: Response) {
  const { movieId } = req.params;
  const watchedMovie = res.locals.watchedMovie as MovieUpdated;

  try {
    const movieExists = await readMovieById(Number(movieId));

    if (!movieExists) {
      return res.sendStatus(400);
    }

    await updateMovie(watchedMovie, Number(movieId));
    res.status(200).send('Movie updated successfully!');

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export async function deleteMovie(req: Request, res: Response) {
  const { movieId } = req.params;

  try {
    const movieExists = await readMovieById(Number(movieId));

    if (!movieExists) {
      return res.sendStatus(400);
    }

    await deleteMovieById(Number(movieId));
    res.status(200).send('Movie deleted successfully!');

  } catch (error) {
    res.status(500).send(error.message);
  }
};

export async function getQuantityMoviesByGenre(req: Request, res: Response) {
  try {
    const quantityMovies = await readQuantityMoviesByGenre();

    res.status(200).send(quantityMovies);

  } catch (error) {
    res.status(500).send(error.message);
  }
};