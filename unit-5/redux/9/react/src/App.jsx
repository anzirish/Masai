import { Box, Container, Heading } from "@chakra-ui/react";
import { TodoInput } from "./components/TodoInput";
import { TodoList } from "./components/TodoList";

function App() {
  return (
    <Container maxW="md" centerContent py={10}>
      <Box p={5} shadow="md" borderWidth="1px" borderRadius="lg" w="100%">
        <Heading mb={4} textAlign="center" color="teal.600">
          Redux Todo App
        </Heading>
        <TodoInput />
        <TodoList />
      </Box>
    </Container>
  );
}

export default App;