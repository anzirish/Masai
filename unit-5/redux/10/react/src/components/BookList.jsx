import { useSelector } from "react-redux";
import { BookItem } from "./BookItem";
import { Text, VStack } from "@chakra-ui/react";

export const BookList = () => {
  const books = useSelector((state) => state.books);

  return (
    <VStack>
        {console.log(books)}
      {books.length === 0 ? (
        <Text>No book yet</Text>
      ) : (
        
        books.map((book) => {
          return (<BookItem book={book}></BookItem>)
        })
      )}
    </VStack>
    
  );
};
