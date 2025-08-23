import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import { Card } from "./Card";

export const Main = () => {
  const { products } = useContext(ProductContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState(products);
  console.log(`products ${products}`);
  console.log(`data ${data}`);
  return (
    <>
      {isLoggedIn &&
        data.map((product) => {
            console.log(product)
          return <Card product={product} />;
        })}
    </>
  );
};
