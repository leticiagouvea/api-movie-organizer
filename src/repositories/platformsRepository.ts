import prisma from "../database/db.js";
import { Platform } from "../protocols/protocols.js";

export async function insertPlatform(platforms: Platform) {
  return prisma.platforms.create({
   data: platforms
  });
};

export async function readPlatformName(name: string) {
  return prisma.platforms.findFirst({
    where: { name }
  });
};