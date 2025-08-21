import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getNewQuote = async () => {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    setQuote(data.content);
    setAuthor(data.author);
  };

  useEffect(() => {
    // fetch immediately on mount
    getNewQuote();
    // fetch after 30 sec
    const timer = setInterval(getNewQuote, 30000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <p>{quote}</p>
      <p>{author}</p>
      <button onClick={getNewQuote}>Get new Quote</button>
    </>
  );
}

export default App;
