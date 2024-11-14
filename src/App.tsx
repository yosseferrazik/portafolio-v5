import { Route, Routes } from "react-router-dom";

import "./styles/global.css";

import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Aboutme from "./pages/Aboutme/Aboutme";
import Skills from "./pages/Skills/Skills";
import Contact from "./pages/Contact/Contact";
import Certificates from "./pages/Certificates/Certificates";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />{" "}
        <Route path="/skills" element={<Skills />} />{" "}
        <Route path="/projects" element={<Projects />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/certificates" element={<Certificates />} />{" "}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
