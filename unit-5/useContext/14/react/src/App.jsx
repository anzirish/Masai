import "./App.css";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { Navbar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";

function App() {
  return (
    <>
      <Navbar />
      <SideBar />
      <Main />
      <Footer />
    </>
  );
}

export default App;
