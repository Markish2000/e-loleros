import { Link } from "react-router-dom";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <p>LOGO</p>

      <div className={styles.buttonsNav}>
        <Link to="/home" className={styles.linksNav}>
          Home
        </Link>
        <Link to="/home" className={styles.linksNav}>
          Shop
        </Link>
        <Link className={styles.linksNav}>Contactos</Link>
      </div>
    </nav>
  );
};

export default NavBar;
