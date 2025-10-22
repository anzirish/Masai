import { useContext, useEffect, useState } from "react";
import { BlogContext } from "../contexts/BlogsContext";

const Home = () => {
  const { loading, error, filteredPosts, filterPosts } =
    useContext(BlogContext);
  const [input, setInput] = useState("");

  useEffect(() => {
    filterPosts(input);
  }, [input]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <>
      <input
        type="input"
        placeholder="Enter title to filter"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      {filteredPosts.map((post) => (
        <h4 key={post.id}>{post.title}</h4>
      ))}
    </>
  );
};

export default Home;
