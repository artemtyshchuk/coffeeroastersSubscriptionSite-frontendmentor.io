import styles from "../CreateYourPlan.module.scss";

export const CreatePlanSecondBlock = () => {
  return (
    <div className={styles.secondBlock}>
      <div className={styles.lineContainer}>
        <span className={styles.oval}></span>
        <span className={styles.line}></span>
        <span className={styles.oval}></span>
        <span className={styles.line}></span>
        <span className={styles.oval}></span>
      </div>

      <div className={styles.stepsContainer}>
        <div className={styles.step}>
          <p className={styles.stepNumber}>01</p>
          <p className={styles.stepTitle}>
            Pick your
            <br />
            coffee
          </p>
          <p className={styles.stepDescr}>
            Select from our evolving range of artisan coffees. Our beans are
            ethically sourced and we pay fair prices for them. There are new
            coffees in all profiles every month for you to try out.
          </p>
        </div>

        <div className={styles.step}>
          <p className={styles.stepNumber}>02</p>
          <p className={styles.stepTitle}>
            Choose the
            <br />
            frequency
          </p>
          <p className={styles.stepDescr}>
            Customize your order frequency, quantity, even your roast style and
            grind type. Pause, skip or cancel your subscription with no
            commitment through our online portal.
          </p>
        </div>

        <div className={styles.step}>
          <p className={styles.stepNumber}>03</p>
          <p className={styles.stepTitle}>
            Receive and
            <br />
            enjoy!
          </p>
          <p className={styles.stepDescr}>
            We ship your package within 48 hours, freshly roasted. Sit back and
            enjoy award-winning world-class coffees curated to provide a
            distinct tasting experience.
          </p>
        </div>
      </div>
    </div>
  );
};
