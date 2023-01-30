import prisma from "../database/db.js";
import { Movie, MovieUpdated } from "../protocols/protocols.js";

export async function insertMovie(movie: Movie) {
  return prisma.movies.create({
    data: movie
  });
};

export async function readMovieName(name: string) {
  return prisma.movies.findFirst({
    where: { name }
  });
};

export async function readAllMovies() {
  return prisma.movies.findMany();
};

export async function readMovieById(id: number) {
  return prisma.movies.findFirst({
    where: { id }
  });
};

export async function updateMovie(watchedMovie: MovieUpdated, movieId: number) {
  return prisma.movies.update({
    where: { id: movieId },
    data: {
      status: watchedMovie.status,
      note: watchedMovie.note
    }
  });
};

export async function deleteMovieById(id: number) {
  return prisma.movies.delete({
    where: { id }
  });
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