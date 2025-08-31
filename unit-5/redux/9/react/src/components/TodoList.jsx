import { Text, VStack } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

const TodoList = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <VStack>
      {todos.length == 0 ? (
        <Text>No todos yet</Text>
      ) : (
        todos.map((todo) => {
          return <TodoItem todo={todo} />;
        })
      )}
    </VStack>
  );
};
export {TodoList}