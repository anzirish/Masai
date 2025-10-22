import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };

    fetchProduct();
  }, [id]);

  if (loading) return <p>Loading product...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.title}</h2>
      <img src={product.thumbnail} alt={product.title} style={{ width: "300px" }} />
      <p>{product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> ⭐ {product.rating}</p>
    </div>
  );
};

export default ProductDetails;
