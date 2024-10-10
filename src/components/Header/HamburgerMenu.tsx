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

interface HamburgerMenuIconProps {
  hamburgerMenuOpen: boolean;
  setHamburgerMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HamburgerMenuIcon = ({
  hamburgerMenuOpen,
  setHamburgerMenuOpen,
}: HamburgerMenuIconProps) => {
  return (
    <div
      className={`${styles.hamburger} ${hamburgerMenuOpen ? styles.open : ""}`}
      onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
};
