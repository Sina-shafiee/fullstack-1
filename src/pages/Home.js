import React from 'react';
import PostList from '../components/PostList';

const Home = () => {
  return (
    <main>
      <h2>Welcome to our blog</h2>
      <PostList limit={6} />
    </main>
  );
};

export default Home;
