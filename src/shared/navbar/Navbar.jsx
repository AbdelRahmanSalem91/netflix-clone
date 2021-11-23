import styles from "./navbar.module.css";
import logo from "../../assets/Netflix-Logo.png";
import avatar from "../../assets/Netflix-avatar.png";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, handleShow] = useState(false);
  const navigate = useNavigate();
  const handleNavbar = () => {
    if (window.scrollY > 100) handleShow(true);
    else handleShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleNavbar);
    return () => window.removeEventListener("scroll", null);
  }, []);
  return (
    <nav className={`${styles.nav} ${show && styles.nav__black}`}>
      <div className={styles.nav_contents}>
        <img
          onClick={() => navigate("/")}
          src={logo}
          alt="Netflix"
          className={styles.leftLogo}
        />
        <img
          onClick={() => navigate("/profile")}
          src={avatar}
          alt="My profile"
          className={styles.avatar}
        />
      </div>
    </nav>
  );
};

export default Navbar;
