import { Request, Response } from 'express';
import { Genre } from '../protocols/protocols.js';
import { insertGenre, readGenreName } from '../repositories/genresRepository.js';

export async function createGenre(req: Request, res: Response) {
  const genre = res.locals.genre as Genre;

  try {
    const genreExists = await readGenreName(genre.name);

    if (genreExists) {
      return res.status(400).send('This genre already exists');
    }

    await insertGenre(genre);
    res.status(201).send('Genre successfully created!')

  } catch (error) {
    res.status(500).send(error.message);
  }
};