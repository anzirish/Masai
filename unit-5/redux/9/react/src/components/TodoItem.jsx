import { Button, HStack, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../redux/action";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <>
      <HStack>
        <Text textDecoration={todo.status ? "line-through" : "none"}>
          {todo.title}
        </Text>
        <Button onClick={() => dispatch(updateTodo(todo.id))}>
          {todo.status ? "Mark as not completed" : "Mark as completed"}
        </Button>
        <Button onClick={() => dispatch(removeTodo(todo.id))}>Delete</Button>
      </HStack>
    </>
  );
};
export { TodoItem };
