import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMeals } from '../../redux/mealsReducer';
import { MealsTitle } from './style';

const Meals = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  return (
    <div>
      <MealsTitle>Meals</MealsTitle>
    </div>
  );
};

export default Meals;
