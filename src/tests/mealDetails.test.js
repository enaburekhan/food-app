import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
// import { configureStore } from '@reduxjs/toolkit';
import store from '../redux/store';
import { useParams } from 'react-router-dom';
import MealDetails from '../pages/mealDetails/MealDetails';
import { useSelector, useDispatch } from 'react-redux';
import { getMealDetails } from '../redux/mealsReducer';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

describe('MealDetails component', () => {
  const mockedMeal = [
    {
      idMeal: '1',
      strCategory: 'Category 1',
      strInstructions: 'Instructions 1',
      strTags: 'Tags 1',
      strSource: 'Source 1',
    },
    {
      idMeal: '2',
      strCategory: 'Category 2',
      strInstructions: 'Instructions 2',
      strTags: 'Tags 2',
      strSource: 'Source 2',
    },
  ];

  beforeEach(() => {
    useSelector.mockReturnValue(mockedMeal);
    useDispatch.mockReturnValue(jest.fn());
    useParams.mockReturnValue({ id: '1' });
  });

  afterEach(() => {
    useSelector.mockClear();
    useDispatch.mockClear();
    useParams.mockClear();
  });

  it('fetches and renders meal details correctly', async () => {
    const { getByText } = render(
      <Provider store={store}>
        <MealDetails />
      </Provider>
    );

    await waitFor(() => {
      expect(getByText('Recipe Category: Category 1')).toBeInTheDoM();
      expect(getByText('Cooking Instructions: Instructions 1')).toBeInTheDoM();
      expect(getByText('Tags 1')).toBeInTheDoM();
      expect(getByText('Recipe Source: Source 1')).toBeInTheDoM();
    });
  });

  it('dispatches getMealDetails action with the correct ID', () => {
    render(
      <Provider store={store}>
        <MealDetails />
      </Provider>
    );

    expect(useDispatch).toHaveBeenCalled();
    expect(getMealDetails).toHaveBeenCalledWith('1');
  });
});
