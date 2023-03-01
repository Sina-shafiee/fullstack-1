import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const SinglePost = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:3004/posts/${id}`);
        const fetchData = await res.json();

        setPostData(fetchData);
      } catch (error) {
        console.log(error);
      }
    };

    // if (location.state) {
    //   return;
    // }

    fetchData();
  }, [id]);

  return (
    <div>
      {postData ? (
        <>
          <h2>{postData.title}</h2>
          <p>{postData.body}</p>
        </>
      ) : null}
      <Link to='/posts/10'>go to id 10</Link>
    </div>
  );
};

export default SinglePost;
