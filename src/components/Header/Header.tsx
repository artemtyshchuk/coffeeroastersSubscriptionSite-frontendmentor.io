import { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import { HamburgerMenu, HamburgerMenuIcon } from "./HamburgerMenu";
import { Logo } from "components/Logo";
import { NavButtons } from "components/Buttons/NavButtons/NavButtons";

export const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <Logo />

      {isMobile && (
        <HamburgerMenuIcon
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
      )}

      {hamburgerMenuOpen && <HamburgerMenu />}

      <NavButtons hoverColor="#333d4b" />
    </div>
  );
};
