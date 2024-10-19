import { ReactComponent as CloseArrowIcon } from "assets/plan/desktop/icon-arrow.svg";
import { ReactComponent as OpenArrowIcon } from "assets/plan/desktop/OpenArrow.svg";
import styles from "../CreateYourPlan.module.scss";

interface FormOptionsProps {
  formQuestions: string;
  isOpen: boolean;
  id: string;
  handleOpen: () => void;
}

export const FormOptions = ({
  formQuestions,
  isOpen,
  id,
  handleOpen,
}: FormOptionsProps) => {
  return (
    <div className={styles.formOptionsContainer} id={id}>
      <button className={styles.formOption} onClick={handleOpen}>
        <p
          className={styles.formOptionsTitle}
          style={{ color: isOpen ? "#83888F" : "" }}
        >
          {formQuestions}
        </p>

        {isOpen ? <CloseArrowIcon /> : <OpenArrowIcon />}
      </button>

      {isOpen && (
        <div className={styles.formOptionBoxes}>
          <div className={styles.formOptionBox}>
            <p className={styles.formOptionBoxTitle}>Capsule</p>
            <p className={styles.formOptionBoxDescr}>
              Compatible with Nespresso systems and similar brewers
            </p>
          </div>
          <div className={styles.formOptionBox}>
            <p className={styles.formOptionBoxTitle}>Filter</p>
            <p className={styles.formOptionBoxDescr}>
              For pour over or drip methods like Aeropress, Chemex, and V60
            </p>
          </div>
          <div className={styles.formOptionBox}>
            <p className={styles.formOptionBoxTitle}>Espresso</p>
            <p className={styles.formOptionBoxDescr}>
              Dense and finely ground beans for an intense, flavorful experience
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
