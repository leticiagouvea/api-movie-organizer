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