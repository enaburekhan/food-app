import axios from 'axios';

jest.mock('axios');

// Mock the fetch function
global.fetch = jest.fn();

// Define the mocked response data
const mockedData = {
  meals: [{ idMeal: '1', strMeal: 'Mocked Meal' }],
};

describe('mealsSlice', () => {
  describe('getMeals', () => {
    it('should fetch meals successfully', async () => {
      // Set up the mock axios.get implementation
      axios.get.mockResolvedValue({ data: mockedData });

      const { getMeals } = require('../redux/mealsReducer');

      // Create a mock dispatch function
      const dispatch = jest.fn();

      // Dispatch the getMeals thunk
      await getMeals()(dispatch, null, undefined);

      // Verify the dispatched action
      expect(axios.get).toHaveBeenCalledWith(
        'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
      );
    });
  });

  describe('getMealDetails', () => {
    it('should fetch meal details successfully', async () => {
      // Set up the mock axios.get implementation
      axios.get.mockResolvedValue({ data: mockedData });

      const { getMealDetails } = require('../redux/mealsReducer');

      // Create a mock dispatch function
      const dispatch = jest.fn();

      // Dispatch the getMealDetails thunk
      await getMealDetails('1')(dispatch, null, undefined);

      // Verify the dispatched action
      expect(axios.get).toHaveBeenCalledWith(
        'https://www.themealdb.com/api/json/v1/1/lookup.php?i=1'
      );
    });
  });
});
