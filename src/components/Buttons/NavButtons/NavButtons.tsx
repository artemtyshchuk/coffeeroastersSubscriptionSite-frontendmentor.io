import React, { useState } from "react";
import styles from "./NavButtons.module.scss";
import { useLocation, useNavigate } from "react-router";

interface NavButtonsProps {
  hoverColor: string;
}

export const NavButtons = ({ hoverColor }: NavButtonsProps) => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const navigate = useNavigate();
  const location = useLocation();

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
        style={{
          color:
            isHovered === "home"
              ? hoverColor
              : location.pathname === "/"
              ? hoverColor
              : "",
        }}
        onMouseEnter={() => handleMouseEnter("home")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/")}
      >
        Home
      </button>
      <button
        className={styles.headerButton}
        style={{
          color:
            isHovered === "about"
              ? hoverColor
              : location.pathname === "/about-us"
              ? hoverColor
              : "",
        }}
        onMouseEnter={() => handleMouseEnter("about")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/about-us")}
      >
        About us
      </button>
      <button
        className={styles.headerButton}
        style={{
          color:
            isHovered === "create"
              ? hoverColor
              : location.pathname === "/create-your-plan"
              ? hoverColor
              : "",
        }}
        onMouseEnter={() => handleMouseEnter("create")}
        onMouseLeave={handleMouseLeave}
        onClick={() => navigate("/create-your-plan")}
      >
        Create your plan
      </button>
    </div>
  );
};
