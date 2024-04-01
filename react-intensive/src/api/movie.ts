import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './utils';
import { GetMovieByIdData } from './types';
import { Endpoints } from './config';
import { Movie } from '../types/types';

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery,
  endpoints: (builder) => ({
    getMovieById: builder.query<Movie, GetMovieByIdData>({
      query: (data) => ({
        url: `${Endpoints.GetMovies}/${data.id}`,
      }),
    }),
  }),
});

export const movieReducer = movieApi.reducer;

export const { useGetMovieByIdQuery } = movieApi;
