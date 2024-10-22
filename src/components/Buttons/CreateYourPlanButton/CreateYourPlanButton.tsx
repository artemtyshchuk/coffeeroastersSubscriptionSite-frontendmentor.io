import styles from "./CreateYourPlanButton.module.scss";

interface CreateYourPlanButtonProps {
  backgroundColor: string;
  onClick: () => void;
  marginTop?: string;
  buttonText: string;
  disabled?: boolean;
}
export const CreateYourPlanButton = ({
  backgroundColor,
  onClick,
  marginTop,
  buttonText,
  disabled,
}: CreateYourPlanButtonProps) => {
  return (
    <>
      <button
        className={styles.createYourPlanButton}
        onClick={onClick}
        style={{ backgroundColor: backgroundColor, marginTop: marginTop }}
        disabled={disabled}
      >
        {buttonText}
      </button>
    </>
  );
};
