import { useState } from "react";
import styles from "../CreateYourPlan.module.scss";
import { FormSteps } from "./FormSteps";
import { FormOptions } from "./FormOptions";

export const CreatePlanThirdBlock = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{
    [key: number]: boolean;
  }>({});

  const handleStepClick = (stepIndex: number) => {
    if (activeStep === stepIndex) {
      setActiveStep(null);
      setOpenQuestions((prev) => ({ ...prev, [stepIndex]: false }));
    } else {
      setActiveStep(stepIndex);
      setOpenQuestions((prev) => ({ ...prev, [stepIndex]: true }));
      document.getElementById(`form-question-${stepIndex}`)?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  const toggleQuestion = (id: number) => {
    setOpenQuestions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className={styles.thirdBlock}>
      <div className={styles.formSteps}>
        <FormSteps
          number="01"
          title="Preference"
          divider
          isActive={activeStep === 0}
          onClick={() => handleStepClick(0)}
        />
        <FormSteps
          number="02"
          title="Bean Type"
          divider
          isActive={activeStep === 1}
          onClick={() => handleStepClick(1)}
        />
        <FormSteps
          number="03"
          title="Quantity"
          divider
          isActive={activeStep === 2}
          onClick={() => handleStepClick(2)}
        />
        <FormSteps
          number="04"
          title="Grind Option"
          divider
          isActive={activeStep === 3}
          onClick={() => handleStepClick(3)}
        />
        <FormSteps
          number="05"
          title="Deliveries"
          isActive={activeStep === 4}
          onClick={() => handleStepClick(4)}
        />
      </div>

      <FormOptions
        formQuestions="How do you drink your coffee?"
        isOpen={openQuestions[0] || false}
        id="form-question-0"
        handleOpen={() => toggleQuestion(0)}
      />
      <FormOptions
        formQuestions="What type of coffee?"
        isOpen={openQuestions[1] || false}
        id="form-question-1"
        handleOpen={() => toggleQuestion(1)}
      />
      <FormOptions
        formQuestions="How much would you like?"
        isOpen={openQuestions[2] || false}
        id="form-question-2"
        handleOpen={() => toggleQuestion(2)}
      />
      <FormOptions
        formQuestions="Want us to grind them?"
        isOpen={openQuestions[3] || false}
        id="form-question-3"
        handleOpen={() => toggleQuestion(3)}
      />
      <FormOptions
        formQuestions="How often should we deliver?"
        isOpen={openQuestions[4] || false}
        id="form-question-4"
        handleOpen={() => toggleQuestion(4)}
      />
    </div>
  );
};
