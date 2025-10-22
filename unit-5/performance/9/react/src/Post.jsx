import React, { useEffect, useMemo } from "react";

const Post = React.memo(({ post, toggleVerify }) => {
  const color = useMemo(() => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }, [post.verify]);

  return (
    <>
      <div style={{ padding: "20px", backgroundColor: color }}>
        <h4>{post.title}</h4>
        <p>{post.body}</p>
        <button onClick={toggleVerify}>
          {post.verify ? "Verified" : "Verify"}
        </button>
      </div>
    </>
  );
});

export default Post;
