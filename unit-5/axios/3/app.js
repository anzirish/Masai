const { useState } = React;

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [sorts, setSorts] = useState("");
  const [filters, setFilters] = useState("");

  const loadMemes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await axios.get("https://api.imgflip.com/get_memes");
      const memes = response.data.data.memes;
      setData(memes);
    } catch (error) {
      setError("Failed to load memes");
    } finally {
      setLoading(false);
    }
  };

  let filteredData = [...data];

  if (input) {
    filteredData = filteredData.filter((meme) =>
      meme.name.toLowerCase().includes(input.toLowerCase())
    );
  }

  if (sorts === "name-asc") {
    filteredData.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (sorts === "name-desc") {
    filteredData.sort((a, b) => b.name.localeCompare(a.name));
  }

  if (sorts === "width-asc") {
    filteredData.sort((a, b) => a.width - b.width);
  }

  if (sorts === "width-desc") {
    filteredData.sort((a, b) => b.width - a.width);
  }

  if (filters === "width") {
    filteredData = filteredData.filter((meme) => meme.width > 500);
  }

  if (filters === "height") {
    filteredData = filteredData.filter((meme) => meme.height > 500);
  }

  {
    filteredData.length > 0 &&
      filteredData.map((meme) => (
        <div
          key={meme.id}
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "5px",
            border: "2px solid aqua",
            borderRadius: "10px",
            padding: "16px",
          }}
        >
          <img
            style={{ width: "300px", height: "300px" }}
            src={meme.url}
            alt=""
          />
          <h2>{meme.name}</h2>
        </div>
      ));
  }

  return (
    <div className={darkMode ? "app dark" : "app"} style={{ padding: "20px" }}>
      <div>
        <button onClick={loadMemes}>Load memes</button>
        <button onClick={() => setData([])}>Reset</button>
        <button
          style={{ float: "right" }}
          onClick={() => setDarkMode(!darkMode)}
        >
          Change theme
        </button>
      </div>
      <div style={{ margin: "10px 0", display: "flex", gap: "20px" }}>
        <input
          type="text"
          placeholder="Enter meme name to search"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <label>
          {" "}
          Sort by name or width
          <select value={sorts} onChange={(e) => setSorts(e.target.value)}>
            <option value="">All</option>
            <option value="name-asc">Name [asc]</option>
            <option value="name-desc">Name [desc]</option>
            <option value="width-asc">Width [asc]</option>
            <option value="width-desc">Width [desc]</option>
          </select>
        </label>
        <label>
          {" "}
          Filter by width and height
          <select value={filters} onChange={(e) => setFilters(e.target.value)}>
            <option value="">All</option>
            <option value="width">Width &gt; 500</option>
            <option value="height">Height &gt; 500</option>
          </select>
        </label>
      </div>
      <hr />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: "10px",
        }}
      >
        {loading && <div className="spinner"></div>}
        {error && <p style={{ color: "red" }}>{error}</p>}
        {!loading && !error && data.length > 0 && filteredData.length === 0 && (
          <p>No results found</p>
        )}

        {filteredData &&
          filteredData.map((meme) => {
            return (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "5px",
                  border: "2px solid aqua",
                  borderRadius: "10px",
                  padding: "16px",
                }}
              >
                <img
                  style={{ width: "300px", height: "300px" }}
                  src={meme.url}
                  alt=""
                ></img>
                <h2>{meme.name}</h2>
              </div>
            );
          })}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
