import { useNavigate } from "react-router";
import styles from "./Header.module.scss";

interface HamburgerMenuProps {
  closeMenu: () => void;
}

export const HamburgerMenu = ({ closeMenu }: HamburgerMenuProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.hamburgerMenu}>
      <button
        className={styles.hamburgerMenuButton}
        onClick={() => {
          navigate("/");
          closeMenu();
        }}
      >
        Home
      </button>
      <button
        className={styles.hamburgerMenuButton}
        onClick={() => {
          navigate("/about-us");
          closeMenu();
        }}
      >
        About us
      </button>
      <button
        className={styles.hamburgerMenuButton}
        onClick={() => {
          navigate("/create-your-plan");
          closeMenu();
        }}
      >
        Create your plan
      </button>
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
