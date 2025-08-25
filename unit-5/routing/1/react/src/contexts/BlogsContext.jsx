import { createContext, useEffect, useState } from "react";

const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  const fetchPosts = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/posts");
      if (!response.ok) {
        setError("Fetching data error " + response.status);
        return;
      }
      const { posts } = await response.json();
      setPosts(posts);
      setFilteredPosts(posts);
    } catch (error) {
      setError("Error " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const filterPosts = (input) => {
    if (!input) setFilteredPosts(posts);
    const newPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(input.toLowerCase())
    );
    setFilteredPosts(newPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <BlogContext.Provider
      value={{ loading, error, filteredPosts, filterPosts }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export { BlogContext, BlogContextProvider };
