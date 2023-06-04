import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMeals = createAsyncThunk('meals/getMeals', async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`
  );
  const data = response.data;
  return data;
});

export const getMealDetails = createAsyncThunk(
  'meals/getMealDetails',
  async (id) => {
    const response = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    const data = response.data;
    return data;
  }
);

export const mealsSlice = createSlice({
  name: 'meals',
  initialState: {
    loading: false,
    error: null,
    data: [],
    meal: null,
  },
  extraReducers: {
    [getMeals.pending]: (state) => {
      state.loading = true;
    },
    [getMeals.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getMeals.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.meals;
    },
    [getMealDetails.pending]: (state) => {
      state.loading = true;
    },
    [getMealDetails.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    },
    [getMealDetails.fulfilled]: (state, action) => {
      state.loading = false;
      state.data = action.payload.meals;
    },
  },
});

export default mealsSlice.reducer;
