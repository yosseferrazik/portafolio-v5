import { Route, Routes } from "react-router-dom";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Aboutme from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />{" "}
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
