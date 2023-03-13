import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './GlobalStyles';
import MealDetails from './mealDetails/MealDetails';
import Meals from './meals/Meals';

function App() {
  return (
    <div className='App'>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Meals />} />
        <Route path='/:id' element={<MealDetails />} />
      </Routes>
    </div>
  );
}

export default App;
