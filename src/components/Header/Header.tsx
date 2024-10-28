import styles from "./Header.module.scss";
import { useState } from "react";
import { HamburgerMenu, HamburgerMenuIcon } from "./HamburgerMenu";
import { Logo } from "components/Logo";
import { NavButtons } from "components/Buttons/NavButtons/NavButtons";
import { useScreenSize } from "hooks/useScreenSize";
import { AnimatePresence, motion } from "framer-motion";

export const Header = () => {
  const [hamburgerMenuOpen, setHamburgerMenuOpen] = useState(false);
  const { smallScreen } = useScreenSize();

  const menuVariants = {
    open: {
      y: 20,
      opacity: 1,
      scale: 1.05,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    closed: {
      y: -20,
      opacity: 0,
      scale: 0.95,
      transition: { duration: 0.4, ease: "easeIn" },
    },
  };

  return (
    <div className={styles.header}>
      <Logo />

      {smallScreen.hugeMobileScreen && (
        <HamburgerMenuIcon
          hamburgerMenuOpen={hamburgerMenuOpen}
          setHamburgerMenuOpen={setHamburgerMenuOpen}
        />
      )}

      <AnimatePresence>
        {hamburgerMenuOpen && (
          <motion.div
            className={styles.hamburgerMenu}
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            onAnimationComplete={(definition) => {
              if (definition === "closed") setHamburgerMenuOpen(false);
            }}
          >
            <HamburgerMenu closeMenu={() => setHamburgerMenuOpen(false)} />
          </motion.div>
        )}
      </AnimatePresence>

      <NavButtons hoverColor="#333d4b" />
    </div>
  );
};
