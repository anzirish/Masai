import "./App.css";
import type { Post } from "./types";
import { useFetch } from "./useFetch";

function App() {
  const { posts, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <>
      {loading && <p>loading...</p>}
      {error && <p>{error}</p>}
      <div style={{ display: "flex", flexDirection: "column" }}></div>
      {posts.map((post: Post) => {
        return (
          <div style={{ border: "1px solid aqua", marginTop: "5px" }}>
            <p>{post.title}</p>
            <p>{post.body}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
