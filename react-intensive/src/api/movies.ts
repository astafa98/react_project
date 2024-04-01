import { createApi } from '@reduxjs/toolkit/query/react';
import { Endpoints } from './config';
import {
  GetFilteredMoviesData,
  ResponseResult,
  SearchMoviesData,
} from './types';
import { baseQuery } from './utils';

export const moviesApi = createApi({
  reducerPath: 'movies',
  baseQuery,
  endpoints: (builder) => ({
    getFilteredMovies: builder.query<ResponseResult, GetFilteredMoviesData>({
      query: (data) => {
        return {
          url: Endpoints.GetMovies,
          params: data,
        };
      },
    }),
    searchMovies: builder.query<ResponseResult, SearchMoviesData>({
      query: (data) => ({
        url: Endpoints.SearchMovies,
        params: data,
      }),
    }),
  }),
});

export const moviesReducer = moviesApi.reducer;

export const { useGetFilteredMoviesQuery, useSearchMoviesQuery } = moviesApi;
