import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const PostList = ({ limit }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // const wait = () => {
    //   return new Promise((resolve) => setTimeout(resolve, 100000000));
    // };

    const fetchData = async () => {
      setIsLoading(true);

      try {
        const queryString = limit ? `?_limit=${limit}` : '';

        const res = await fetch(`http://localhost:3004/posts${queryString}`);

        if (!res.ok) {
          throw new Error('data fetch failed');
        }

        const fetchData = await res.json();
        // await wait();
        setData(fetchData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };

    fetchData();
  }, [limit]);

  if (isLoading) {
    return <h2>Loading ...</h2>;
  }

  if (error) {
    return <h2>{error.message ?? error}</h2>;
  }

  return (
    <section>
      {data?.map((post) => (
        <Link key={post.id} to={`/posts/${post.id}`} state={post}>
          <article>
            <h4>{post.title}</h4>
            <p>{post.body}</p>
          </article>
        </Link>
      ))}
    </section>
  );
};

export default PostList;
