import styles from "../HomeLayout.module.scss";
import bean from "assets/home/desktop/icon-coffee-bean.svg";
import gift from "assets/home/desktop/icon-gift.svg";
import truck from "assets/home/desktop/icon-truck.svg";

export const HomeThirdBlock = () => {
  return (
    <div className={styles.thirdContainer}>
      <div className={styles.thirdBlockTitleContainer}>
        <p className={styles.thirdBlockTitle}>Why choose us?</p>
        <p className={styles.thirdBlockDescr}>
          A large part of our role is choosing which particular coffees will be
          featured in our range. This means working closely with the best coffee
          growers to give you a more impactful experience on every level.
        </p>
      </div>

      <div className={styles.whyUsBlocksContainer}>
        <div className={styles.whyUsBlock}>
          <img src={bean} alt="bean" />
          <p className={styles.whyUsBlockTitle}>Best quality</p>
          <p className={styles.whyUsBlockDescr}>
            Discover an endless variety of the world’s best artisan coffee from
            each of our roasters.
          </p>
        </div>

        <div className={styles.whyUsBlock}>
          <img src={gift} alt="gift" />
          <p className={styles.whyUsBlockTitle}>Exclusive benefits</p>
          <p className={styles.whyUsBlockDescr}>
            Special offers and swag when you subscribe, including 30% off your
            first shipment.
          </p>
        </div>

        <div className={styles.whyUsBlock}>
          <img src={truck} alt="truck" />
          <p className={styles.whyUsBlockTitle}>Free shipping</p>
          <p className={styles.whyUsBlockDescr}>
            We cover the cost and coffee is delivered fast. Peak freshness:
            guaranteed.
          </p>
        </div>
      </div>
    </div>
  );
};
