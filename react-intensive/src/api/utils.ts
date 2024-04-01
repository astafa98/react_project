import { fetchBaseQuery } from '@reduxjs/toolkit/query';
import { BASE_URL, DEFAULT_TIMEOUT } from './config';

export const baseQuery = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers) => {
    headers.set('X-API-KEY', process.env.REACT_APP_API_KEY ?? '');
    return headers;
  },
  timeout: DEFAULT_TIMEOUT,
});
