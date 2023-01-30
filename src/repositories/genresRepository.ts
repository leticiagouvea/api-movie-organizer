import prisma from "../database/db.js";
import { Genre } from "../protocols/protocols.js";

export async function insertGenre(genres: Genre) {
  return prisma.genres.create({
    data: genres
  });
};

export async function readGenreName(name: string) {
  return prisma.genres.findFirst({
    where: { name }
  });
};