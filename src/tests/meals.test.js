import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import Meals from '../pages/meals/Meals';
import { useSelector } from 'react-redux';
import store from '../redux/store';
import { BrowserRouter as Router } from 'react-router-dom';

// Mock the Redux store and data
const mockedMeals = [
  {
    idMeal: '1',
    strMeal: 'Meal 1',
    strMealThumb: 'meal1.jpg',
    strCategoryDescription: 'Category 1',
  },
  {
    idMeal: '2',
    strMeal: 'Meal 2',
    strMealThumb: 'meal2.jpg',
    strCategoryDescription: 'Category 2',
  },
];

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}));

describe('Meals component', () => {
  beforeEach(() => {
    // Mock the useSelector hook implementation
    useSelector.mockReturnValue(mockedMeals);
  });

  afterEach(() => {
    // Clear the mock implementation of the useSelector hook
    useSelector.mockClear();
  });

  it('renders meals after data is fetched', async () => {
    const { getByText, getByAltText } = render(
      <Provider store={store}>
        <Router>
          <Meals />
        </Router>
      </Provider>
    );

    // Wait for the component to finish rendering and fetching data
    await waitFor(() => {
      // Check if the rendered meals are displayed correctly
      expect(getByAltText('Meal 1')).toBeInTheDocument();
      expect(getByAltText('Meal 2')).toBeInTheDocument();
      expect(getByText('Meal 1')).toBeInTheDocument();
      expect(getByText('Meal 2')).toBeInTheDocument();
      expect(getByText('Category 1')).toBeInTheDocument();
      expect(getByText('Category 2')).toBeInTheDocument();
    });
  });

  it('displays loading state before data is fetched', () => {
    // Mock an empty array for meals
    useSelector.mockReturnValue([]);

    const { getByText } = render(
      <Provider store={store}>
        <Router>
          <Meals />
        </Router>
      </Provider>
    );

    // Check if the loading state is displayed
    expect(getByText('Loading...')).toBeInTheDocument();
  });
});
