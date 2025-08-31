import { addTodo } from "../redux/action";
import { Button, HStack, Input } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";

const TodoInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleInput = () => {
    if (input.trim() === "") return;
    dispatch(addTodo(input));
    setInput("");
  };

  return (
    <HStack mt={4}>
      <Input
        placeholder="Enter todo title"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button colorScheme="teal" onClick={handleInput}>Add todo</Button>
    </HStack>
  );
};

export { TodoInput };
