import styled from 'styled-components';

const StyledMainContainer = styled.div`
  /* border: 2px solid purple; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;
const MealsTitle = styled.div`
  margin: auto;
  text-align: center;
  /* border: 1px solid red; */
`;

const MealCard = styled.div`
  /* border: 1px solid black; */
  width: 22rem;
  display: grid;
  /* flex-direction: row; */
  img {
    /* border: 1px solid red; */
    width: 16rem;
  }
`;

export { MealsTitle, MealCard, StyledMainContainer };
