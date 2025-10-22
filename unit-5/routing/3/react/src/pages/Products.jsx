import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
      setFiltered(data.products);

      const uniqueCats = [...new Set(data.products.map(p => p.category))];
      setCategories(uniqueCats);

      setLoading(false);
    };

    fetchProducts();
  }, []);

  const handleFilter = (category) => {
    if (category === "all") {
      setFiltered(products);
    } else {
      setFiltered(products.filter((p) => p.category === category));
    }
  };

  const handleSort = (order) => {
    const sorted = [...filtered].sort((a, b) =>
      order === "asc" ? a.price - b.price : b.price - a.price
    );
    setFiltered(sorted);
  };

  if (loading) return <p>Loading products...</p>;

  return (
    <div>
      <h2>Product Store</h2>

      <div>
        <label>Filter: </label>
        <select onChange={(e) => handleFilter(e.target.value)}>
          <option value="all">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Sort: </label>
        <select onChange={(e) => handleSort(e.target.value)}>
          <option value="asc">Price: Low → High</option>
          <option value="desc">Price: High → Low</option>
        </select>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "20px" }}>
        {filtered.map((p) => (
          <div key={p.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <img src={p.thumbnail} alt={p.title} style={{ width: "100%", height: "150px", objectFit: "cover" }} />
            <h4>{p.title}</h4>
            <p>${p.price}</p>
            <Link to={`/product/${p.id}`}>View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
