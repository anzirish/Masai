import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (city.trim() !== "") {
      navigate(`/weather/${city}`);
    }
  };

  return (
    <div >
      <h2>Weather</h2>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Get Weather</button>
    </div>
  );
};

export default Home;
