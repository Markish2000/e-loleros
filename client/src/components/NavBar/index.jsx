import LinkRouter from "../Link";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.container}>
      <p>LOGO</p>

      <div className={styles.buttonsNav}>
        <LinkRouter to="home"/>
        <LinkRouter to="about"/>
        <LinkRouter to="shop"/>
        <LinkRouter to="footer" value="contactos"/>
      </div>
    </nav>
  );
};

export default NavBar;
