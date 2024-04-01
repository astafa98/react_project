import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../components/counter/counterSlice';
import { moviesApi, moviesReducer } from '../api/movies';
import { movieApi, movieReducer } from '../api/movie';
import { authApi, authReducer } from '../api/auth/auth';
import userReducer from './userSlice';
import { filtersApi, filtersReducer } from '../api/filters';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movies: moviesReducer,
    movie: movieReducer,
    filters: filtersReducer,
    auth: authReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      moviesApi.middleware,
      movieApi.middleware,
      filtersApi.middleware
    ),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
