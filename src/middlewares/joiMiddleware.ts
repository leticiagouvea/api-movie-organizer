import { Request, Response, NextFunction } from 'express';
import joi from 'joi';

const platformSchema = joi.object({
  name: joi.string().required()
});

const genreSchema = joi.object({
  name: joi.string().required()
});

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