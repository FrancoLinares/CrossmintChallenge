export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
}
export enum PLANETS {
  POLYANETS = 'polyanets',
  SOLOONS = 'soloons',
  COMETHS = 'comeths',
}

export type Request = {
  method: HttpMethods;
  headers: Record<string, string>;
  body: string;
  planet: PLANETS;
};

export type MetaVerseRequest = {
  coordinates: number[];
  method: HttpMethods;
  headers?: Record<string, string>;
  planet: PLANETS;
};
