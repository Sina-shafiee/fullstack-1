import { useLoaderData } from 'react-router-dom';

const Posts = () => {
  const data = useLoaderData();
  return (
    <section>
      {data?.map((post) => (
        <article key={post.id}>
          <h4>{post.title}</h4>
          <p>{post.body}</p>
        </article>
      ))}
      hello
    </section>
  );
};

export default Posts;
