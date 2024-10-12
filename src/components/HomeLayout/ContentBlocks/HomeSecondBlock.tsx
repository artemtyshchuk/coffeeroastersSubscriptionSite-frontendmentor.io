import styles from "../HomeLayout.module.scss";
import granEspresso from "assets/home/desktop/image-gran-espresso.png";
import planalto from "assets/home/desktop/image-planalto.png";
import piccollo from "assets/home/desktop/image-piccollo.png";
import danche from "assets/home/desktop/image-danche.png";

export const HomeSecondBlock = () => {
  return (
    <div className={styles.secondContainer}>
      <div className={styles.secondBlockTitleContainer}>
        <p className={styles.secondBlockTitle}>our collection</p>
      </div>
      <div className={styles.coffeCollectionContainer}>
        <div className={styles.coffeBlock}>
          <div className={styles.coffeImgContainer}>
            <img src={granEspresso} alt="granEspresso" />
          </div>
          <p className={styles.coffeTitle}>Gran Espresso</p>
          <p className={styles.coffeDescr}>
            Light and flavorful blend with cocoa and black pepper for an intense
            experience.
          </p>
        </div>

        <div className={styles.coffeBlock}>
          <div className={styles.coffeImgContainer}>
            <img src={planalto} alt="planalto" />
          </div>
          <p className={styles.coffeTitle}>Planalto</p>
          <p className={styles.coffeDescr}>
            Brazilian dark roast with rich and velvety body, and hints of fruits
            and nuts.
          </p>
        </div>

        <div className={styles.coffeBlock}>
          <div className={styles.coffeImgContainer}>
            <img src={piccollo} alt="piccollo" />
          </div>
          <p className={styles.coffeTitle}>Piccollo</p>
          <p className={styles.coffeDescr}>
            Mild and smooth blend featuring notes of toasted almond and dried
            cherry.
          </p>
        </div>

        <div className={styles.coffeBlock}>
          <div className={styles.coffeImgContainer}>
            <img src={danche} alt="granEspresso" />
          </div>
          <p className={styles.coffeTitle}>Danche</p>
          <p className={styles.coffeDescr}>
            Ethiopian hand-harvested blend densely packed with vibrant fruit
            notes.
          </p>
        </div>
      </div>
    </div>
  );
};
