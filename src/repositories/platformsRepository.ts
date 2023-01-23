import { QueryResult } from "pg";
import { connectionDB } from "../database/db.js";
import { PlatformEntity, Platform } from "../protocols/protocols.js";

export async function insertPlatform(platforms: Platform): Promise<QueryResult<PlatformEntity>> {
  return await connectionDB.query(`
    INSERT INTO
      platforms (name)
    VALUES ($1);`, [platforms.name]);
};

export async function readPlatformName(name: string): Promise<QueryResult<PlatformEntity>> {
  return await connectionDB.query(`
    SELECT
      *
    FROM
      platforms
    WHERE
      name ILIKE $1;`, [name]);
};