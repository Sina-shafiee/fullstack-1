import { useLocation } from 'react-router-dom';

const SinglePostState = () => {
  const { state: data } = useLocation();

  console.log(data);
  //   console.log(location);
  //   const data = location.state;
  return (
    <div>
      {data && (
        <>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePostState;
