import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Box,Text } from "@chakra-ui/react";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      as="footer"
      p="4"
      bg={theme === "light" ? "gray.100" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      textAlign="center"
      position="sticky"
      bottom="0"
    >
      <Text>© 2025 My Dashboard</Text>
    </Box>
  );
};
