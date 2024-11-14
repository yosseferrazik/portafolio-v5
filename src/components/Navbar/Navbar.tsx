import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import log1o from "../../assets/log1o.png";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const navRef = useRef<HTMLElement>(null);

  const showNavbar = () => {
    navRef.current?.classList.toggle(styles.responsiveNav);

    console.log(navRef.current?.classList);
  };

  return (
    <header className={styles.header}>
      <h3>
        <img src={log1o} alt="logo" draggable={false} />
      </h3>
      <button className={styles.navBtn} onClick={showNavbar}>
        <FaBars />
      </button>
      <nav ref={navRef} className={styles.nav}>
        <Link to={"/"} onClick={showNavbar}>
          🏠 Home
        </Link>
        <Link to={"/aboutme"} onClick={showNavbar}>
          😉 About me
        </Link>
        <Link to={"/certificates"} onClick={showNavbar}>
          🎓​ Certificates
        </Link>
        <Link to={"/skills"} onClick={showNavbar}>
          🦾​ Tech skills
        </Link>
        <Link to={"/contact"} onClick={showNavbar}>
          📧​ Contact
        </Link>

        <button
          className={`${styles.navBtn} ${styles.navCloseBtn}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
