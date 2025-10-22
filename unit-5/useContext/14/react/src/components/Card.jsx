import { Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Card = ({ product }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      p="6"
      shadow="md"
      borderRadius="md"
      bg={theme === "light" ? "gray.100" : "gray.800"}
    >
      <Text>{product}</Text>
    </Box>
  );
};
