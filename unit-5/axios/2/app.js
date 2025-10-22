const { useState } = React;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchProducts() {
    setLoading(true);
    const reponse = await fetch("https://fakestoreapi.com/products");
    if (!reponse.ok) {
      setLoading(false);
      setError(reponse.status);
      return;
    }
    const products = await reponse.json();
    setLoading(false);
    setData(products);
  }

  return (
    <>
      <button onClick={fetchProducts}>Load products</button>
      <button onClick={() => setData([])}>Clear products</button>
      <br />
      {loading ? (
        <>
          <img
            src="https://miro.medium.com/v2/resize:fit:978/0*mv8MNRLDNNnt5f72.gif"
            alt="Loading..."
            width="150"
          />
          <p>{error}</p>
        </>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "2px",
          }}
        >
          {data.map((product) => (
            <div
              key={product.id}
              style={{ border: "2px solid aqua", gap: "2px", padding : '10px' }}
            >
              <img
                style={{ height: "300px", width: "300px" }}
                src={product.image}
                alt=""
              ></img>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
