import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Posts from './pages/Posts';
// import SinglePost from './pages/SinglePost';
import Contact from './pages/contact/Contact';
import SocialMedia from './pages/contact/SocialMedia';
import SendMessage from './pages/contact/SendMessage';
import ContactIndex from './pages/contact/ContactIndex';
import SinglePostState from './pages/SinglePostState';
// import Count from './pages/count';

const App = () => {
  // const handleClick = (count) => {
  //   console.log(count);
  // };
  // const navigate = useNavigate();

  // const handleLogin = () => {
  //   if (true) {
  //     navigate('/contact');
  //   }
  // };

  return (
    <>
      {/* <Count handleClick={handleClick} /> */}
      <Navbar />
      {/* <button onClick={handleLogin}>Login</button> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/posts' element={<Posts />} />
        <Route path='/posts/:id' element={<SinglePostState />} />
        <Route path='/contact' element={<Contact />}>
          <Route index element={<ContactIndex />} />
          <Route path='social-media' element={<SocialMedia />} />
          <Route path='send-message' element={<SendMessage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
