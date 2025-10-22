import { Heading, HStack, Input, Button } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../actions/bookAction";

export const BookInput = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const dispatch = useDispatch();

  const bookHander = () => {
    if (title.trim() === "" || author.trim() === "" || genre.trim() === "")
      return;
    const book = { id: Date.now(), title, author, genre, read: false };
    dispatch(addBook(book));
    setTitle("");
    setAuthor("");
    setGenre("");
    console.log("Book added", book);
  };

  return (
    <>
      <Heading>Add a book</Heading>
      <HStack mb={10}>
        <Input
          placeholder="Enter book title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="Enter book author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <Input
          placeholder="Enter book genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
        />
        <Button onClick={bookHander}>Add book</Button>
      </HStack>
    </>
  );
};
