import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { GenreEntity, Genre } from "../protocols/protocols.js";

export async function insertGenre(genres: Genre): Promise<QueryResult<GenreEntity>> {
  return await connectionDB.query(`
    INSERT INTO
      genres (name)
    VALUES ($1);`, [genres.name]);
}

export async function readGenreName(name: string): Promise<QueryResult<GenreEntity>> {
  return await connectionDB.query(`
    SELECT
      *
    FROM
      genres
    WHERE
      name ILIKE $1;`, [name]);
}