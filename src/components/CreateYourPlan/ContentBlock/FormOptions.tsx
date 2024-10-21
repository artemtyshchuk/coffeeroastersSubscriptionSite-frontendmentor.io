import { ReactComponent as CloseArrowIcon } from "assets/plan/desktop/icon-arrow.svg";
import { ReactComponent as OpenArrowIcon } from "assets/plan/desktop/OpenArrow.svg";
import styles from "../CreateYourPlan.module.scss";
import { InputOption } from "./InputOption";

interface FormOptionsProps {
  formQuestions: string;
  isOpen: boolean;
  id: string;
  handleOpen: () => void;
  firstOptionBoxTitle: string;
  secondOptionBoxTitle: string;
  thirdOptionBoxTitle: string;
  firstOptionBoxDescr: string;
  secondOptionBoxDescr: string;
  thirdOptionBoxDescr: string;
  onOptionChange: (selected: string) => void;
}

export const FormOptions = ({
  formQuestions,
  isOpen,
  id,
  handleOpen,
  firstOptionBoxTitle,
  secondOptionBoxTitle,
  thirdOptionBoxTitle,
  firstOptionBoxDescr,
  secondOptionBoxDescr,
  thirdOptionBoxDescr,
  onOptionChange,
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
        <form className={styles.formOptionBoxes}>
          <InputOption
            firstOptionBoxTitle={firstOptionBoxTitle}
            secondOptionBoxTitle={secondOptionBoxTitle}
            thirdOptionBoxTitle={thirdOptionBoxTitle}
            firstOptionBoxDescr={firstOptionBoxDescr}
            secondOptionBoxDescr={secondOptionBoxDescr}
            thirdOptionBoxDescr={thirdOptionBoxDescr}
            onOptionChange={onOptionChange}
          />
        </form>
      )}
    </div>
  );
};
