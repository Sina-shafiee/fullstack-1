import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <header>
        <Link to='/'>Home</Link>
        <Link to='/posts'>Posts</Link>
      </header>
      <Outlet />
    </div>
  );
};

export default Home;
