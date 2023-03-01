import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import { postsLoader } from './api/api';
import Home from './app2/Home';
import HomeIndex from './app2/HomeIndex';
import Posts from './app2/posts';

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Home />}>
        <Route index element={<HomeIndex />} />
        <Route path='posts' loader={postsLoader} element={<Posts />} />
      </Route>
    )
  );
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
