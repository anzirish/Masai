import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";
import { Flex, Button, Text } from "@chakra-ui/react";

export const Navbar = () => {
  const { isLoggedIn, toggleLogin } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <Flex
      as="nav"
      p="4"
      justify="space-between"
      bg={theme === "light" ? "gray.100" : "gray.800"}
      color={theme === "light" ? "black" : "white"}
    >
      <Text fontWeight="bold">
        {isLoggedIn ? "Logged In ✅" : "Logged Out ❌"}
      </Text>
      <Flex gap="4">
        <Button onClick={toggleLogin}>
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme}>
          Toggle {theme === "light" ? "Dark" : "Light"}
        </Button>
      </Flex>
    </Flex>
  );
};
