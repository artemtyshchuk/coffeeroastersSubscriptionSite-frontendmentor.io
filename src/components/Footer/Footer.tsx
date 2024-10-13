/* eslint-disable react/jsx-no-target-blank */
import { Logo } from "components/Logo";
import styles from "./Footer.module.scss";
import { NavButtons } from "components/Buttons/NavButtons/NavButtons";
import { ReactComponent as TwitterIcon } from "assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as FacebookIcon } from "assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as InstagramIcon } from "assets/shared/desktop/icon-instagram.svg";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Logo
        beanStyle={{ backgroundColor: "#2c343e", border: "1px solid #2c343e" }}
        titleStyle={{ color: "#fff", fontSize: "28px" }}
      />

      <NavButtons hoverColor="#fff" />

      <div className={styles.socialMediaContainer}>
        <a href="https://pl-pl.facebook.com/" target="_blank">
          <FacebookIcon className={styles.footerSocialIcon} />
        </a>
        <a href="https://x.com/home" target="_blank">
          <TwitterIcon className={styles.footerSocialIcon} />
        </a>
        <a href="https://www.instagram.com/" target="_blank">
          <InstagramIcon className={styles.footerSocialIcon} />
        </a>
      </div>
    </div>
  );
};
