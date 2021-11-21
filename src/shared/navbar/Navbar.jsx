import styles from "./navbar.module.css";
import logo from "../../assets/Netflix-Logo.png";
import avatar from "../../assets/Netflix-avatar.png";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const handleNavbar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => window.removeEventListener("scroll");
  }, []);
  return (
    <nav className={`${styles.nav} ${show && styles.nav__black}`}>
      <div className={styles.nav_contents}>
        <img src={logo} alt="Netflix" className={styles.leftLogo} />
        <img src={avatar} alt="" className={styles.avatar} />
      </div>
    </nav>
  );
};

export default Navbar;
