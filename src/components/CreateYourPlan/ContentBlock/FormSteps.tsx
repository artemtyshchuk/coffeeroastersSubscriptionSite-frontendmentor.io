import styles from "../CreateYourPlan.module.scss";

interface FormStepsProps {
  number: string;
  title: string;
  divider?: boolean;
  isActive: boolean;
  onClick: () => void;
}

export const FormSteps = ({
  number,
  title,
  divider,
  isActive,
  onClick,
}: FormStepsProps) => {
  return (
    <div
      className={`${styles.formStep} ${isActive ? styles.activeFormStep : ""}`}
      onClick={onClick}
    >
      <p
        className={styles.formStepTitle}
        style={{ color: isActive ? "#83888F" : "" }}
      >
        <span className={styles.formStepNumber}>{number}</span> {title}
      </p>
      {divider && <span className={styles.formStepDivider} />}
    </div>
  );
};
