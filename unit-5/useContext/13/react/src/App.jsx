// App.jsx
import { Box, Button, Flex, Grid } from "@chakra-ui/react";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { ThemeContext } from "../context/ThemeContext";

function App() {
  const { isLoggedIn, toggleAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Flex
        as="nav"
        p="4"
        bg={theme === "light" ? "gray.100" : "gray.700"}
        justifyContent="space-between"
        alignItems="center"
      >
        <Button onClick={toggleAuth} colorScheme="blue">
          {isLoggedIn ? "Log Out" : "Log In"}
        </Button>
        <Button onClick={toggleTheme} colorScheme="teal">
          Toggle to {theme === "light" ? "Dark" : "Light"} Theme
        </Button>
      </Flex>
      
      <Grid templateColumns="repeat(3, 1fr)" gap="4" p="4">
        {["Card 1", "Card 2", "Card 3"].map((card) => (
          <Box 
            key={card} 
            p="4" 
            shadow="md" 
            bg={theme === "light" ? "gray.200" : "gray.600"}
            borderRadius="md"
            color={theme === "light" ? "gray.800" : "white"}
          >
            {card}
          </Box>
        ))}
      </Grid>
      
      <Box 
        as="footer" 
        p="4" 
        bg={theme === "light" ? "gray.300" : "gray.800"}
        color={theme === "light" ? "gray.800" : "white"}
        textAlign="center"
      >
        Footer Content
      </Box>
    </>
  );
}

export default App;