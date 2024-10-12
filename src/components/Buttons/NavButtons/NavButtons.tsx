import React, { useState } from "react";
import styles from "./NavButtons.module.scss";
import { useNavigate } from "react-router";

interface NavButtonsProps {
  hoverColor: string;
  defaultColor: string;
}

export const NavButtons = ({ hoverColor, defaultColor }: NavButtonsProps) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleMouseEnter = (button: string) => {
    setIsHovered(button);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  return (
    <div className={styles.buttonsContainer}>
      <button
        className={styles.headerButton}
        style={{ color: isHovered === "home" ? hoverColor : defaultColor }}
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        className={styles.headerButton}
        style={{ color: isHovered === "about" ? hoverColor : defaultColor }}
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/about-us")}
      >
        About us
      </button>
      <button
        className={styles.headerButton}
        style={{ color: isHovered === "create" ? hoverColor : defaultColor }}
        onMouseEnter={() => handleMouseEnter("create")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/create-your-plan")}
      >
        Create your plan
      </button>
    </div>
  );
};
