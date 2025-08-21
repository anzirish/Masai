import { useState } from "react";
import { useEffect } from "react";
import UserCard from "./UserCard";

function App() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState("");

  const filteredData = () => {
    return data.filter((user) => user.name.includes(input));
  };

  const fetchData = async () => {
    setLoading(true);
    setError(false);
    try {
      const reponse = await fetch("https://jsonplaceholder.typicode.com/users");
      const users = await reponse.json();
      setData(users);
    } catch (error) {
      setError("Error while fetching API" + error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <input
        type="text"
        placeholder="Enter name to search"
        style={{
          padding: "5px",
          width: "100%",
          border: "1px solid black",
          borderRadius: "5px",
          marginBottom: "10px",
        }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
      {filteredData().length > 0 ? (
        filteredData().map((user) => {
          return (
            <UserCard
              name={user.name}
              email={user.email}
              city={user.address.city}
            />
          );
        })
      ) : (
        <>{!loading && <p>No results for input : {input}</p>}</>
      )}
    </>
  );
}

export default App;
