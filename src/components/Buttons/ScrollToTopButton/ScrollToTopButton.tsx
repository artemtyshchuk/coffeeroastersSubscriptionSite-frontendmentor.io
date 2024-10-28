import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./ScrollToTopButton.module.scss";
import { ReactComponent as ScrollToTopArrow } from "assets/goToTopArrow.svg";

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollThreshold = document.documentElement.scrollHeight / 5;
    setIsVisible(window.scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
    transition: { duration: 0.3 },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          className={styles.ScrollToTopButton}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          {...fadeInUp}
        >
          <ScrollToTopArrow className={styles.arrowIcon} />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
