import { Route, Routes } from "react-router-dom";

import "./styles/global.css";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Aboutme from "./pages/Aboutme";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="/aboutme" element={<Aboutme />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
