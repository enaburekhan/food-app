import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMealDetails } from '../../redux/mealsReducer';

const MealDetails = () => {
  const dispatch = useDispatch();

  useEffect(
    (mealId) => {
      dispatch(getMealDetails(mealId));
    },
    [dispatch]
  );
  return <h1>MealDetails</h1>;
};

export default MealDetails;
