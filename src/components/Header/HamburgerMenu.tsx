import styles from "./Header.module.scss";
export const HamburgerMenu = () => {
  return (
    <div className={styles.hamburgerMenu}>
      <button className={styles.hamburgerMenuButton}>Home</button>
      <button className={styles.hamburgerMenuButton}>About us</button>
      <button className={styles.hamburgerMenuButton}>Create your plan</button>
    </div>
  );
};
