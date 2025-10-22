import { removeItem, updatePrice } from "../features/cartSlice";
import { Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";

const ListItems = () => {
  const products = useSelector((state) => state.products.items);
  const total = useSelector((state) => state.products.totalPrice);
  const dispatch = useDispatch();

  const handleRemoveItem = (id, price) => {
    dispatch(removeItem(id));
    dispatch(updatePrice({ mode: "sub", amount: price }));
  };

  if (products.length === 0) {
    return <Text>No products found</Text>;
  }
  return (
    <>
      {<Text mt={10}>Total price : {total}</Text>}
      {products.map((product) => {
        return (
          <HStack
            justify="space-between"
            gap={50}
            border="2px solid blue"
            borderRadius="md"
            mt={10}
            p={2}
          >
            <Text>{product.name}</Text>
            <Text>{product.price}</Text>
            <Button
              onClick={() => handleRemoveItem(product.id, product.price)}
              colorScheme="light"
              variant="outline"
            >
              Remove
            </Button>
          </HStack>
        );
      })}
    </>
  );
};

export default ListItems;
