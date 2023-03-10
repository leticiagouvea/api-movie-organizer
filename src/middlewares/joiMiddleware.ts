import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const movieSchema = joi.object({
  name: joi.string().required(),
  genreId: joi.number().integer().required(),
  platformId: joi.number().integer().required(),
  status: joi.boolean().required(),
  note: joi.string()
});

const platformSchema = joi.object({
  name: joi.string().required()
});

const genreSchema = joi.object({
  name: joi.string().required()
});

const movieUpdatedSchema = joi.object({
  status: joi.boolean().required(),
  note: joi.string().required()
});

export async function validateMovie(req: Request, res: Response, next: NextFunction) {
  const movie = req.body;

  const validation = movieSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.movie = movie;
  next();
};

export async function validatePlatform(req: Request, res: Response, next: NextFunction) {
  const platform = req.body;

  const validation = platformSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.platform = platform;
  next();
};

export async function validateGenre(req: Request, res: Response, next: NextFunction) {
  const genre = req.body;

  const validation = genreSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.genre = genre;
  next();
};

export async function validateMovieUpdated(req: Request, res: Response, next: NextFunction) {
  const watchedMovie = req.body;

  const validation = movieUpdatedSchema.validate(req.body, { abortEarly: false });

  if (validation.error) {
    const error = validation.error.details.map(detail => detail.message);
    return res.status(422).send(error);
  }

  res.locals.watchedMovie = watchedMovie;
  next();
}