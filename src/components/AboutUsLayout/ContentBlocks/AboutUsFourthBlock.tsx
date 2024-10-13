import styles from "../AboutUsLayout.module.scss";
import UK from "assets/about/desktop/illustration-uk.svg";
import Canada from "assets/about/desktop/illustration-canada.svg";
import Australia from "assets/about/desktop/illustration-australia.svg";

export const AboutUsFourthBlock = () => {
  return (
    <div className={styles.fourthBlock}>
      <p className={styles.fourthBlockTitle}>Our headquarters</p>
      <div className={styles.countryCards}>
        <div className={styles.countryContainer}>
          <div className={styles.countryImageContainer}>
            <img src={UK} alt="UK" />
          </div>
          <p className={styles.countryname}>United Kingdom</p>
          <p className={styles.countryDescr}>
            68 Asfordby Rd,
            <br />
            Alcaston,
            <br />
            SY6 1YA,
            <br />
            +44 1241 918425
          </p>
        </div>

        <div className={styles.countryContainer}>
          <div className={styles.countryImageContainer}>
            <img src={Canada} alt="Canada" />
          </div>
          <p className={styles.countryname}>Canada</p>
          <p className={styles.countryDescr}>
            1528 Eglinton Avenue,
            <br />
            Toronto,
            <br />
            Ontario M4P 1A6,
            <br />
            +1 416 485 2997
          </p>
        </div>

        <div className={styles.countryContainer}>
          <div className={styles.countryImageContainer}>
            <img src={Australia} alt="Australia" />
          </div>
          <p className={styles.countryname}>Australia</p>
          <p className={styles.countryDescr}>
            36 Swanston Street,
            <br />
            Kewell,
            <br />
            Victoria,
            <br />
            +61 4 9928 3629
          </p>
        </div>
      </div>
    </div>
  );
};
