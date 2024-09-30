import React, { useRef } from "react";

import { FaBars, FaTimes } from "react-icons/fa";

import "../styles/component/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle("responsive_nav");
  };

  return (
    <header>
      <h3>LOGO</h3>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
      <nav ref={navRef}>
        <Link to={"/"} onClick={showNavbar}>
          🏠 Home
        </Link>
        <Link to={"/aboutme"} onClick={showNavbar}>
          😉​ About me
        </Link>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
