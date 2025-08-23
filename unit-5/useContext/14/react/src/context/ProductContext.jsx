import { useState } from "react";
import { createContext } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState([
    "Iphone",
    "MacBook",
    "Monitor",
    "Glasses",
  ]);

  const updateProducts = (newProducts) => {
    setProducts([...products, ...newProducts]);
  };

  return (
    <ProductContext.Provider value={{ products, updateProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
