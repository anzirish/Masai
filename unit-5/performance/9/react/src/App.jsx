import { useCallback, useState } from "react";
import "./App.css";
import Post from "./Post";

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  const submitHandler = () => {
    if (!title.trim() || !body.trim()) return;
    const post = { id: Date.now(), verify: false, title, body };
    setPosts((prev) => [...prev, post]);
  };

  const toggle = useCallback((index) =>
    setPosts((prev) =>
      prev.map((post, i) =>
        i === index ? { ...post, verify: !post.verify } : post
      )
    )
  );

  return (
    <>
      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        placeholder="Enter body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <button onClick={submitHandler}>Add post</button>
      {posts.map((post, index) => {
        return <Post post={post} toggleVerify={() => toggle(index)} />;
      })}
    </>
  );
}

export default App;
