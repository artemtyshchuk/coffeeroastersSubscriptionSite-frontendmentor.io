import { useNavigate } from "react-router";
import styles from "./Logo.module.scss";
import bean from "assets/home/desktop/icon-coffee-bean.svg";

interface LogoProps {
  beanStyle?: React.CSSProperties;
  titleStyle?: React.CSSProperties;
}

export const Logo = ({beanStyle, titleStyle}: LogoProps) => {

  const navigate = useNavigate();

  return (
    <div className={styles.logoContainer} onClick={() => navigate("/") }>
        <div className={styles.firstBean}>
          <img src={bean} alt="bean" />
        </div>
        <div className={styles.secondBean} style={beanStyle}>
          <img src={bean} alt="bean" />
        </div>
        <div className={styles.titleContainer}>
          <h1 className={styles.logoTitle} style={titleStyle}>coffeeroasters</h1>
        </div>
      </div>
  );
};
