import { ReactComponent as CloseArrowIcon } from "assets/plan/desktop/icon-arrow.svg";
import { ReactComponent as OpenArrowIcon } from "assets/plan/desktop/OpenArrow.svg";
import styles from "../CreateYourPlan.module.scss";
import { useState } from "react";

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
  const [selectedOption, setSelectedOption] = useState<string>("");

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
          <label
            className={styles.formOptionBoxDescr}
            style={{ color: selectedOption === "Capsule" ? "white" : "" }}
          >
            <div
              className={styles.formOptionBox}
              style={{
                backgroundColor: selectedOption === "Capsule" ? "#0E8784" : "",
              }}
            >
              <p
                className={styles.formOptionBoxTitle}
                style={{ color: selectedOption === "Capsule" ? "white" : "" }}
              >
                Capsule
              </p>
              <input
                name="HowDoYouDrinkYourCoffee"
                type="radio"
                value="Capsule"
                checked={selectedOption === "Capsule"}
                onChange={() => setSelectedOption("Capsule")}
              />
              Compatible with Nespresso systems and similar brewers
            </div>
          </label>

          <label
            className={styles.formOptionBoxDescr}
            style={{ color: selectedOption === "Filter" ? "white" : "" }}
          >
            <div
              className={styles.formOptionBox}
              style={{
                backgroundColor: selectedOption === "Filter" ? "#0E8784" : "",
              }}
            >
              <p
                className={styles.formOptionBoxTitle}
                style={{ color: selectedOption === "Filter" ? "white" : "" }}
              >
                Filter
              </p>
              <input
                name="HowDoYouDrinkYourCoffee"
                type="radio"
                value="Filter"
                checked={selectedOption === "Filter"}
                onChange={() => setSelectedOption("Filter")}
              />
              For pour over or drip methods like Aeropress, Chemex, and V60
            </div>
          </label>
          <label
            className={styles.formOptionBoxDescr}
            style={{ color: selectedOption === "Espresso" ? "white" : "" }}
          >
            <div
              className={styles.formOptionBox}
              style={{
                backgroundColor: selectedOption === "Espresso" ? "#0E8784" : "",
              }}
            >
              <p
                className={styles.formOptionBoxTitle}
                style={{ color: selectedOption === "Espresso" ? "white" : "" }}
              >
                Espresso
              </p>
              <input
                name="HowDoYouDrinkYourCoffee"
                type="radio"
                value="Espresso"
                checked={selectedOption === "Espresso"}
                onChange={() => setSelectedOption("Espresso")}
              />
              Dense and finely ground beans for an intense, flavorful experience
            </div>
          </label>
        </form>
      )}
    </div>
  );
};
