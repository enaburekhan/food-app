import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getMealDetails } from '../../redux/mealsReducer';

const MealDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const meal = useSelector((state) => state.meals.data);

  useEffect(() => {
    dispatch(getMealDetails(id));
  }, [dispatch, id]);
  return (
    <div>
      {meal.map((item) => (
        <div key={item.idMeal}>
          <p>Recipe Category: {item.strCategory}</p>
          <p>Cooking Instructions: {item.strInstructions}</p>
          <p>{item.strTags}</p>
          <p>Recipe Source: {item.strSource}</p>
        </div>
      ))}
    </div>
  );
};

export default MealDetails;
