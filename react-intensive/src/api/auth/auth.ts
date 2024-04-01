import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Endpoints, SERVER_API } from '../config';
import { DefaultResponse, LoginBody, registerBody } from './auth-types';

export const authApi = createApi({
  reducerPath: 'auth',
  baseQuery: fetchBaseQuery({
    baseUrl: SERVER_API,
  }),
  endpoints: (builder) => ({
    login: builder.mutation<DefaultResponse, LoginBody>({
      query: (body) => ({
        url: Endpoints.login,
        method: 'POST',
        body,
      }),
    }),
    register: builder.mutation<DefaultResponse, registerBody>({
      query: (body) => ({
        url: Endpoints.register,
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const authReducer = authApi.reducer;

export const { useRegisterMutation, useLoginMutation } = authApi;
