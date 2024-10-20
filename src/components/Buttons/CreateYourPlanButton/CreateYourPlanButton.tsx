import styles from "./CreateYourPlanButton.module.scss";

interface CreateYourPlanButtonProps {
  backgroundColor: string;
  onClick: () => void;
  marginTop?: string;
  buttonText: string;
}
export const CreateYourPlanButton = ({
  backgroundColor,
  onClick,
  marginTop,
  buttonText,
}: CreateYourPlanButtonProps) => {
  return (
    <>
      <button
        className={styles.createYourPlanButton}
        onClick={onClick}
        style={{ backgroundColor: backgroundColor, marginTop: marginTop }}
      >
        {buttonText}
      </button>
    </>
  );
};
