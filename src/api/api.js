export const postsLoader = async () => {
  const res = await fetch(`http://localhost:3004/posts`);
  const data = await res.json();

  await (async function wait() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  })();

  return data;
};
