import { useEffect, useState } from "react";
import type { Post } from "./types";

export const useFetch = (url: string) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchData = async () => {
    try {
      setLoading(true);
      const result = await fetch(url);
      if (!result.ok) throw new Error("Failed to fetch posts");
      const data: Post[] = await result.json();
      setPosts(data);
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("Something went wrong while fetching data");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { posts, loading, error };
};
