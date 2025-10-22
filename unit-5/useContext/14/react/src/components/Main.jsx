import { useContext } from "react";
import { useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { AuthContext } from "../context/AuthContext";
import { Card } from "./Card";
import { Grid } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

export const Main = () => {
  const { products } = useContext(ProductContext);
  const { isLoggedIn } = useContext(AuthContext);
  const [data, setData] = useState(products);
  const { theme } = useContext(ThemeContext);
  console.log(`products ${products}`);
  console.log(`data ${data}`);
  return (
    <Grid
      templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
      gap="4"
      p="4"
      flex="1"
      bg={theme === "light" ? "white" : "gray.900"}
      color={theme === "light" ? "black" : "white"}
    >
      {products.map((product, idx) => (
        <Card product={product}></Card>
      ))}
    </Grid>
  );
};
