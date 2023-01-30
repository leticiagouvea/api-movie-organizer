import { Request, Response } from 'express';
import { Platform } from '../protocols/protocols.js';
import { insertPlatform, readPlatformName } from '../repositories/platformsRepository.js';

export async function createPlatform(req: Request, res: Response) {
  const platform = res.locals.platform as Platform;

  try {
    const platformExists = await readPlatformName(platform.name);

    if (platformExists) {
      return res.status(400).send('This platform already exists');
    }

    await insertPlatform(platform);
    res.status(201).send('Platform successfully created!')

  } catch (error) {
    res.status(500).send(error.message);
  }
};