import { Navtext } from './style';

const Navbar = () => {
  return (
    <nav class='navbar navbar-expand-lg navbar-light bg-dark'>
      <div class='container-fluid'>
        <Navtext class='navbar-brand' to='/'>
          Meals
        </Navtext>
      </div>
    </nav>
  );
};

export default Navbar;
