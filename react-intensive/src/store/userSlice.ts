import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IUser } from '../api/auth/auth-types';
import { RootState } from './store';

const getUserFromLocalStorage = (): IUser | null => {
  const userString = localStorage.getItem('user');
  if (userString) {
    try {
      return JSON.parse(userString);
    } catch (error) {
      console.error('Error parsing user from localStorage:', error);
    }
  }
  return null;
};

interface InitialState {
  user: IUser;
}

const initialState: InitialState = {
  user: getUserFromLocalStorage(),
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      localStorage.setItem('user', JSON.stringify(action.payload));
    },
    deleteUser: (state) => {
      state.user = null;
      localStorage.removeItem('user');
    },
  },
});

export const userSelector = (state: RootState) => state.user.user;

export const { setUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;
