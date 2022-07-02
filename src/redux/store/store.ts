import { createSlice, configureStore } from '@reduxjs/toolkit'
import { todos } from '../reducer/reducer';
export const store = configureStore({
    reducer: todos
  })
  