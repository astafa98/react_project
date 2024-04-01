export const BASE_URL = 'https://api.kinopoisk.dev/';
export const SERVER_API = 'http://95.164.8.69';

export enum Endpoints {
  GetMovies = '/v1.4/movie',
  SearchMovies = '/v1.4/movie/search',
  PossibleValuesByField = '/v1/movie/possible-values-by-field',
  login = '/login',
  register = '/register',
}

export const DEFAULT_TIMEOUT = 5000;
