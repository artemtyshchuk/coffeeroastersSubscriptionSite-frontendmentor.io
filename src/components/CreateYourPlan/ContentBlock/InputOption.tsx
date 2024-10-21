import { useState } from "react";
import styles from "../CreateYourPlan.module.scss";

interface InputOptionProps {
  firstOptionBoxTitle: string;
  secondOptionBoxTitle: string;
  thirdOptionBoxTitle: string;
  firstOptionBoxDescr: string;
  secondOptionBoxDescr: string;
  thirdOptionBoxDescr: string;
  onOptionChange: (selected: string) => void;
}

export const InputOption = ({
  firstOptionBoxTitle,
  secondOptionBoxTitle,
  thirdOptionBoxTitle,
  firstOptionBoxDescr,
  secondOptionBoxDescr,
  thirdOptionBoxDescr,
  onOptionChange
}: InputOptionProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const handleOptionChange = (option: string) => {
    setSelectedOption(option);
    onOptionChange(option); 
  };

  return (
    <>
      <label
        className={styles.formOptionBoxDescr}
        style={{ color: selectedOption === firstOptionBoxTitle ? "white" : "" }}
      >
        <div
          className={styles.formOptionBox}
          style={{
            backgroundColor:
              selectedOption === firstOptionBoxTitle ? "#0E8784" : "",
          }}
        >
          <p
            className={styles.formOptionBoxTitle}
            style={{
              color: selectedOption === firstOptionBoxTitle ? "white" : "",
            }}
          >
            {firstOptionBoxTitle}
          </p>
          <input
            name="HowDoYouDrinkYourCoffee"
            type="radio"
            value={firstOptionBoxTitle}
            checked={selectedOption === firstOptionBoxTitle}
            onChange={() => handleOptionChange(firstOptionBoxTitle)}
          />
          {firstOptionBoxDescr}
        </div>
      </label>

      <label
        className={styles.formOptionBoxDescr}
        style={{
          color: selectedOption === secondOptionBoxTitle ? "white" : "",
        }}
      >
        <div
          className={styles.formOptionBox}
          style={{
            backgroundColor:
              selectedOption === secondOptionBoxTitle ? "#0E8784" : "",
          }}
        >
          <p
            className={styles.formOptionBoxTitle}
            style={{
              color: selectedOption === secondOptionBoxTitle ? "white" : "",
            }}
          >
            {secondOptionBoxTitle}
          </p>
          <input
            name="HowDoYouDrinkYourCoffee"
            type="radio"
            value={secondOptionBoxTitle}
            checked={selectedOption === secondOptionBoxTitle}
            onChange={() => handleOptionChange(secondOptionBoxTitle)}
          />
          {secondOptionBoxDescr}
        </div>
      </label>
      <label
        className={styles.formOptionBoxDescr}
        style={{ color: selectedOption === thirdOptionBoxTitle ? "white" : "" }}
      >
        <div
          className={styles.formOptionBox}
          style={{
            backgroundColor:
              selectedOption === thirdOptionBoxTitle ? "#0E8784" : "",
          }}
        >
          <p
            className={styles.formOptionBoxTitle}
            style={{
              color: selectedOption === thirdOptionBoxTitle ? "white" : "",
            }}
          >
            {thirdOptionBoxTitle}
          </p>
          <input
            name="HowDoYouDrinkYourCoffee"
            type="radio"
            value={thirdOptionBoxTitle}
            checked={selectedOption === thirdOptionBoxTitle}
            onChange={() => handleOptionChange(thirdOptionBoxTitle)}
          />
          {thirdOptionBoxDescr}
        </div>
      </label>
    </>
  );
};
