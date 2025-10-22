import { addItem, updatePrice } from "../features/cartSlice";
import { Button, Heading, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const AddItems = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const dispatch = useDispatch();

  const handleProduct = () => {
    if (!name.trim() || !price.trim()) {
      alert("Name or price is empty");
      return;
    }

    const product = { id: Date.now(), name, price: parseInt(price) };
    dispatch(addItem(product));
    dispatch(updatePrice({ mode: "add", amount: +price }));
    setName("");
    setPrice("");
    console.log("Product added");
  };

  return (
    <>
      <Heading>Add a product to cart</Heading>
      <HStack>
        <Input
          placeholder="Enter product name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
        <Input
          placeholder="Enter product price"
          value={price}
          type="number"
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button onClick={handleProduct}>Add to cart</Button>
      </HStack>
    </>
  );
};

export default AddItems;
