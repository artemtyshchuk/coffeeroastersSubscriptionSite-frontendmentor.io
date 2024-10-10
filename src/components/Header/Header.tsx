import styles from "./Header.module.scss";
import bean from "assets/home/desktop/icon-coffee-bean.svg";
import { useEffect, useState } from "react";
import { HamburgerMenu } from "./HamburgerMenu";

interface HeaderProps {}

export const Header = ({}: HeaderProps) => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [mobileScreenSize, setMobileScreenSize] = useState({
    mobile: window.matchMedia("(max-width: 768px)").matches,
  });

  useEffect(() => {
    const handleResize = () => {
      setMobileScreenSize({
        mobile: window.matchMedia("(max-width: 768px)").matches,
      });
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <div className={styles.firstBean}>
          <img src={bean} alt="bean" />
        </div>
        <div className={styles.secondBean}>
          <img src={bean} alt="bean" />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.logoTitle}>coffeeroasters</h1>
        </div>
      </div>

      {mobileScreenSize.mobile && (
        <div
          className={`${styles.hamburger} ${
            hamburgerMenuOpen ? styles.open : ""
          }`}
          onClick={() => setHamburgerMenuOpen(!hamburgerMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      )}

      {hamburgerMenuOpen && <HamburgerMenu />}
      <div className={styles.buttonsContainer}>
        <button className={styles.headerButton}>Home</button>
        <button className={styles.headerButton}>About us</button>
        <button className={styles.headerButton}>Create your plan</button>
      </div>
    </div>
  );
};
