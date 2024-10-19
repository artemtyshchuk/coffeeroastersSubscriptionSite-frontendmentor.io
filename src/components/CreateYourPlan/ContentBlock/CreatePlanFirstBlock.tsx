import styles from "../CreateYourPlan.module.scss";

export const CreatePlanFirstBlock = () => {
  return (
    <div className={styles.firstBlock}>
      <h1 className={styles.firstBlockTitle}>Create plan</h1>
      <p className={styles.firstBlockDescr}>
        Coffee the way you wanted it to be. For coffee delivered tomorrow, or
        next week. For whatever brew method you use. For choice, for
        convenience, for quality.
      </p>
    </div>
  );
};
