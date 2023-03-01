import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const activeStyles = {
    color: 'red'
  };
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyles : {})}
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/about'>
            {({ isActive }) =>
              isActive ? (
                <span className={isActive ? 'active' : null}>
                  About is Active
                </span>
              ) : (
                <span>About is not active</span>
              )
            }
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/posts'
            className={({ isActive }) => (isActive ? 'activeLink' : null)}
          >
            Posts
          </NavLink>
        </li>
        <li>
          <NavLink end to='/contact'>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
