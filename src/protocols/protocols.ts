export type MovieEntity = {
  id: number,
  name: string,
  genreId: number,
  platformId: number,
  status: boolean,
  note?: null | string
};

export type Movie = Omit<MovieEntity, "id">;

export type MovieUpdated = Partial<MovieEntity>;

export type PlatformEntity = {
  id: number,
  name: string
};

export type Platform = Omit<PlatformEntity, "id">;

export type GenreEntity = {
  id: number,
  name: string
};

export type Genre = Omit<GenreEntity, "id">;