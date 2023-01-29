import prisma from "../database/db.js";
import { Platform } from "../protocols/protocols.js";

export async function insertPlatform(platforms: Platform) {
  const platform = prisma.platforms.create({
   data: platforms
  });
  return platform;
};

export async function readPlatformName(name: string) {
  const platformName = prisma.platforms.findFirst({
    where: { name }
  });
  return platformName;
};