import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Navtext = styled(Link)`
  color: #fff;
  text-decoration: none;
  font-size: 2rem;
  :hover {
    background-color: #212529;
    color: #fff;
  }
`;

export { Navtext };
