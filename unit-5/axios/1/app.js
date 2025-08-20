const { useState } = React;

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  async function fetchProducts() {
    setLoading(true);
    const reponse = await fetch("https://fakestoreapi.com/products");
    if (!reponse.ok) {
      setLoading(false);
      console.log(reponse.status);
      return;
    }
    const products = await reponse.json();
    setLoading(false);
    setData(products);
  }

  return (
    <>
      <button onClick={fetchProducts}>Fetch products</button>
      <br/>
      {loading ? (
        <img src="https://miro.medium.com/v2/resize:fit:978/0*mv8MNRLDNNnt5f72.gif" alt="Loading..." width="150" />
      ) : (
        <ul>
          {data.map((product) => (
            <li key={product.id}>
              <h4>{product.title}</h4>
              <p>${product.price}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
