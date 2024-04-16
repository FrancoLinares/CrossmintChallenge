export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
}
export enum PLANETS {
  POLYANETS = 'polyanets',
  SOLOONS = 'soloons',
  COMETHS = 'comeths',
}

export enum PLANET {
  EMPTY = 'SPACE',
  POLYANET = 'POLYANET',
  SOLOON = 'SOLOON',
  COMETH = 'COMETH',
}

export type Request = {
  method: HttpMethods;
  headers: Record<string, string>;
  body: string;
  path: PLANETS;
};

export type MetaVerseRequest = {
  coordinates: number[];
  method: HttpMethods;
  headers?: Record<string, string>;
  planet: PLANETS;
  additionalData?: Record<string, string>;
};

export type CoordinatesMap = Record<string, number[][]>;

export type Matrix = string[][];
