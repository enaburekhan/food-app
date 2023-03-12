import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getMeals = createAsyncThunk('meals/getMeals', async () => {
  const response = await axios.get(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  const data = response.data;
  return data;
});

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
      state.data = action.payload.categories;
    },
    //   [getRateDetails.pending]: (state) => {
    //     state.loading = true;
    //   },
    //   [getRateDetails.rejected]: (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   },
    //   [getRateDetails.fulfilled]: (state, action) => {
    //     state.loading = false;
    //     state.rate = action.payload;
    //   },
  },
});

export default mealsSlice.reducer;
