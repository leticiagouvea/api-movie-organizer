import { Request, Response } from "express";
import { Movie } from "../protocols/protocols.js";
import { 
  insertMovie,
  readMovieName,
  readMovieById,
  readAllMovies,
  updateMovie,
  deleteMovieById
} from "../repositories/moviesRepository.js";


export async function createMovie(req: Request, res: Response) {
  const movie = res.locals.movie as Movie;

  try {
    const movieExists = await readMovieName(movie.name);

    if (movieExists.rowCount !== 0) {
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

    res.status(200).send(movies.rows);

  } catch (error) {
    res.status(500).send(error.message);
  }
}