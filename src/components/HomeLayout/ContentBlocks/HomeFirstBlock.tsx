import styles from "../HomeLayout.module.scss";
import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";
export const HomeFirstBlock = () => {
  return (
    <div className={styles.firstContainer}>
      <h2 className={styles.firstBlockTitle}>Great coffee made simple.</h2>
      <p className={styles.firstBlockDescr}>
        Start your mornings with the world’s best coffees. Try our expertly
        curated artisan coffees from our best roasters delivered directly to
        your door, at your schedule.
      </p>
      <CreateYourPlanButton />
    </div>
  );
};
