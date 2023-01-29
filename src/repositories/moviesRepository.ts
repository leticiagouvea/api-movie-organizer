import prisma from "../database/db.js";
import { Movie, MovieUpdated } from "../protocols/protocols.js";

export async function insertMovie(movie: Movie) {
  const createdMovie = prisma.movies.create({
    data: movie
  });
  return createdMovie;
};

export async function readMovieName(name: string) {
  const movieName = prisma.movies.findFirst({
    where: { name }
  });
  return movieName;
};

export async function readAllMovies() {
  const movies = prisma.movies.findMany();
  return movies;
};

export async function readMovieById(id: number) {
  const movieById = prisma.movies.findFirst({
    where: { id }
  });
  return movieById;
};

export async function updateMovie(watchedMovie: MovieUpdated, movieId: number) {
  const updatedMovie = prisma.movies.update({
    where: { id: movieId },
    data: {
      status: watchedMovie.status,
      note: watchedMovie.note
    }
  });
  return updatedMovie;
};

export async function deleteMovieById(id: number) {
  const deletedMovie = prisma.movies.delete({
    where: { id }
  });
  return deletedMovie;
};

export async function readQuantityMoviesByGenre() {
  const quantityMovieByGenre = await prisma.$queryRaw`
    SELECT
      genres.id,
      genres.name AS genre,
      COUNT(genres.id) AS "movieQuantity"
    FROM
      genres
      JOIN movies ON genres.id = movies."genreId"
    GROUP BY
      genres.id
    ORDER BY "movieQuantity" DESC;
  `
  return JSON.stringify(quantityMovieByGenre, (key, value) => (typeof value === 'bigint' ? value.toString() : value));
};