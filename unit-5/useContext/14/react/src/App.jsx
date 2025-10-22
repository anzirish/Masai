import { Flex } from "@chakra-ui/react";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <Flex direction="column" minH="100vh">
      <Navbar />
      <Flex flex="1">
        <SideBar />
        <Main />
      </Flex>
      <Footer />
    </Flex>
  );
}

export default App;
