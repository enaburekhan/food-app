import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMeals } from '../../redux/mealsReducer';
import { MealCard, MealsTitle, StyledMainContainer } from './style';

const Meals = () => {
  const meals = useSelector((state) => state.meals.data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMeals());
  }, [dispatch]);

  const renderMeals =
    meals &&
    meals.map((meal) => (
      <MealCard className='card' key={meal.idMeal}>
        <img
          src={meal.strMealThumb}
          className='card-img-top'
          alt={meal.strMeal}
        />
        <div className='card-body'>
          <Link to={`/${meal.idMeal}`} className='card-text'>
            {meal.strMeal}
          </Link>
          <p className='card-text'>{meal.strCategoryDescription}</p>
        </div>
      </MealCard>
    ));

  return (
    <div>
      <MealsTitle>Meals</MealsTitle>
      <StyledMainContainer>{renderMeals}</StyledMainContainer>
    </div>
  );
};

export default Meals;
