import prisma from "../database/db.js";
import { Genre } from "../protocols/protocols.js";

export async function insertGenre(genres: Genre) {
  const genre = prisma.genres.create({
    data: genres
  });
  return genre;
};

export async function readGenreName(name: string) {
  const genreName = prisma.genres.findFirst({
    where: { name }
  });
  return genreName;
};