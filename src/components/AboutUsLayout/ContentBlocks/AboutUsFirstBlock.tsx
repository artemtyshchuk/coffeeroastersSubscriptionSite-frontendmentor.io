import styles from "../AboutUsLayout.module.scss";

export const AboutUsFirstBlock = () => {
  return (
    <div className={styles.firstBlock}>
      <p className={styles.firstBlockTitle}>About Us</p>
      <p className={styles.firstBlockDescr}>
        Coffeeroasters began its journey of exotic discovery in 1999,
        highlighting stories of coffee from around the world. We have since been
        dedicated to bring the perfect cup - from bean to brew - in every
        shipment.
      </p>
    </div>
  );
};
