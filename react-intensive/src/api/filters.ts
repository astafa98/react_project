import { createApi } from '@reduxjs/toolkit/query/react';
import { baseQuery } from './utils';
import { FilterField, GetFiltersData } from './types';
import { Endpoints } from './config';

export const filtersApi = createApi({
  reducerPath: 'filters',
  baseQuery,
  endpoints: (builder) => ({
    getFilters: builder.query<FilterField[], GetFiltersData>({
      query: (data) => ({
        url: Endpoints.PossibleValuesByField,
        params: data,
      }),
    }),
  }),
});

export const filtersReducer = filtersApi.reducer;

export const { useGetFiltersQuery } = filtersApi;
