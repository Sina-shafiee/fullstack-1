import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
  return (
    <div>
      <header>
        <Link style={{ marginRight: '2rem' }} to='/contact/send-message'>
          Send Message
        </Link>
        <Link to='/contact/social-media'>Social Media</Link>
      </header>

      <Outlet />

      <footer>bye</footer>
    </div>
  );
};

export default Contact;
