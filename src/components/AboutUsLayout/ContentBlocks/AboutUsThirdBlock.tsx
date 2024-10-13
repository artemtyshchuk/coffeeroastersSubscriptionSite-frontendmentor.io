import styles from "../AboutUsLayout.module.scss";
import cup from "assets/about/desktop/image-quality.jpg";

export const AboutUsThirdBlock = () => {
  return (
    <div className={styles.thirdBlock}>
      <div className={styles.thirdBlockTextContainer}>
        <p className={styles.thirdBlockTitle}>Uncompromising quality</p>
        <p className={styles.thirdBlockDescr}>
          Although we work with growers who pay close attention to all stages of
          harvest and processing, we employ, on our end, a rigorous quality
          control program to avoid over-roasting or baking the coffee dry. Every
          bag of coffee is tagged with a roast date and batch number. Our goal
          is to roast consistent, user-friendly coffee, so that brewing is easy
          and enjoyable.
        </p>
      </div>
      <div className={styles.imageContainer}>
        <img src={cup} alt="cup" className={styles.cupImage} />
      </div>
    </div>
  );
};
