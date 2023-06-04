import styled from 'styled-components';

const StyledMainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-items: center;
  gap: 1rem;
`;

const MealCard = styled.div`
  width: 22rem;
  display: grid;
  img {
    width: 16rem;
  }
`;

export { MealCard, StyledMainContainer };
