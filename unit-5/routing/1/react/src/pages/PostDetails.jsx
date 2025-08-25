import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPost = async () => {
    setError(null);
    setLoading(true);
    try {
      const response = await fetch(`https://dummyjson.com/posts/${id}`);
      if (!response.ok) {
        setError("Fetching data error " + response.status);
        return;
      }
      const post = await response.json();
      console.log(post);
      setPost(post);
    } catch (error) {
      setError("Error " + error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;
  return (
    <>
      {post && (
        <div>
          <h4 key={post.id}>{post.title}</h4>
          <p key={post.id}>{post.body}</p>
          {post.tags.map((tag) => (
            <p>#{tag}</p>
          ))}
        </div>
      )}
    </>
  );
};
export default PostDetails;
