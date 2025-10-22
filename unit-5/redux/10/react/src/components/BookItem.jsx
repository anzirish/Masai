import { Box, HStack, Text, Badge, Button } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { deleteBook, markAsRead } from "../actions/bookAction";

export const BookItem = ({ book }) => {
    const dispatch = useDispatch()
  return (
    <Box 
      w="100%" 
      p={4} 
      mb={3}
      borderWidth="1px" 
      borderRadius="lg" 
      shadow="md"
      _hover={{ shadow: "lg", transform: "scale(1.02)" }} 
      transition="all 0.2s ease-in-out"
    >
      <HStack justify="space-between" align="center">
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            {book.title}
          </Text>
          <Text color="gray.600">{book.author}</Text>
          <Badge colorScheme="purple" mt={1}>
            {book.genre}
          </Badge>
        </Box>

        <Button 
          size="sm" 
          colorScheme={book.read ? "green" : "red"} 
          variant="outline"
          onClick={()=> dispatch(markAsRead(book.id))}
        >
          {book.read ? "Mark as unread" : "Mark as read"}
        </Button>

        <Button 
          size="sm" 
          variant="outline"
          onClick={()=> dispatch(deleteBook(book.id))}
        >
          Delete
        </Button>
      </HStack>
    </Box>
  );
};
