import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Box, Text } from "@chakra-ui/react";
import { ThemeContext } from "../context/ThemeContext";

export const SideBar = () => {
  const { isLoggedIn } = useContext(AuthContext);
  const { theme } = useContext(ThemeContext);

  return (
    <Box
      w={{ base: "0", md: "200px" }}
      bg={theme === "light" ? "gray.100" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
      p="4"
      display={{ base: "none", md: "block" }}
    >
      <Text fontWeight="bold">Sidebar</Text>
      {isLoggedIn && <Text mt="2">👋 Welcome back!</Text>}
    </Box>
  );
};
