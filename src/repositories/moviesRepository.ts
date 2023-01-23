import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { Movie, MovieEntity, MovieUpdated } from "../protocols/protocols.js";

export async function insertMovie(movie: Movie): Promise<QueryResult<MovieEntity>> {
  return connectionDB.query(`
    INSERT INTO
      movies (name, "genreId", "platformId")
    VALUES ($1, $2, $3);
  `, [movie.name, movie.genreId, movie.platformId]);
};

export async function readMovieName(name: string): Promise<QueryResult<MovieEntity>> {
  return connectionDB.query(`
    SELECT
      *
    FROM
      movies
    WHERE
      name ILIKE $1;`, [name]);
};

export async function readAllMovies(): Promise<QueryResult<MovieEntity>> {
  return connectionDB.query(`
    SELECT
      movies.id,
      movies.name,
      genres.name AS genre,
      platforms.name AS platform,
      movies.status,
      movies.note
    FROM
      movies
      JOIN genres ON movies."genreId" = genres.id
      JOIN platforms ON movies."platformId" = platforms.id;`);
};

export async function readMovieById(id: number): Promise<QueryResult<MovieEntity>> {
  return connectionDB.query(`
    SELECT
      *
    FROM
      movies
    WHERE
      id = $1;`, [id]);
};

export async function updateMovie(watchedMovie: MovieUpdated, movieId: number) {
  return connectionDB.query(`
    UPDATE
      movies
    SET
      note = $1, status = $2
    WHERE
      id = $3;`, [watchedMovie.note, watchedMovie.status, movieId]);
};

export async function deleteMovieById(id: number) {
  return connectionDB.query(`
    DELETE FROM
      movies
    WHERE
      id = $1;`, [id]);
};

export async function readQuantityMoviesByGenre(): Promise<QueryResult> {
  return connectionDB.query(`
    SELECT
      genres.id,
      genres.name AS genre,
      COUNT(genres.id) AS "movieQuantity"
    FROM
      genres
      JOIN movies ON genres.id = movies."genreId"
    GROUP BY
      genres.id
    ORDER BY "movieQuantity" DESC;`);
};