import { useState } from "react";
import styles from "../CreateYourPlan.module.scss";
import { FormSteps } from "./FormSteps";
import { FormOptions } from "./FormOptions";
import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";
import { ModalCheckout } from "components/ModalCheckout";
import { OrderSummary } from "./OrderSummary";

export const CreatePlanThirdBlock = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{
    [key: number]: boolean;
  }>({});
  const [modalOpen, setModalOpen] = useState(false);

  const [preference, setPreference] = useState<string>("");
  const [beanType, setBeanType] = useState<string>("");
  const [quantity, setQuantity] = useState<string>("");
  const [grindOption, setGrindOption] = useState<string>("");
  const [delivery, setDelivery] = useState<string>("");

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
        <div className={styles.stickSlide}></div>

        <FormSteps
          number="01"
          title="Preference"
          divider
          isActive={openQuestions[0] || false}
          onClick={() => handleStepClick(0)}
        />
        <FormSteps
          number="02"
          title="Bean Type"
          divider
          isActive={openQuestions[1] || false}
          onClick={() => handleStepClick(1)}
        />
        <FormSteps
          number="03"
          title="Quantity"
          divider
          isActive={openQuestions[2] || false}
          onClick={() => handleStepClick(2)}
        />
        <FormSteps
          number="04"
          title="Grind Option"
          divider
          isActive={openQuestions[3] || false}
          onClick={() => handleStepClick(3)}
        />
        <FormSteps
          number="05"
          title="Deliveries"
          isActive={openQuestions[4] || false}
          onClick={() => handleStepClick(4)}
        />
      </div>

      <FormOptions
        formQuestions="How do you drink your coffee?"
        isOpen={openQuestions[0] || false}
        id="form-question-0"
        handleOpen={() => toggleQuestion(0)}
        firstOptionBoxTitle="Capsule"
        secondOptionBoxTitle="Filter"
        thirdOptionBoxTitle="Espresso"
        firstOptionBoxDescr="Compatible with Nespresso systems and similar brewers"
        secondOptionBoxDescr="For pour over or drip methods like Aeropress, Chemex, and V60"
        thirdOptionBoxDescr="Dense and finely ground beans for an intense, flavorful experience"
        onOptionChange={setPreference}
      />
      <FormOptions
        formQuestions="What type of coffee?"
        isOpen={openQuestions[1] || false}
        id="form-question-1"
        handleOpen={() => toggleQuestion(1)}
        firstOptionBoxTitle="Single Origin"
        secondOptionBoxTitle="Decaf"
        thirdOptionBoxTitle="Blended"
        firstOptionBoxDescr="Distinct, high quality coffee from a specific family-owned farm"
        secondOptionBoxDescr="Just like regular coffee, except the caffeine has been removed"
        thirdOptionBoxDescr="Combination of two or three dark roasted beans of organic coffees"
        onOptionChange={setBeanType}
      />
      <FormOptions
        formQuestions="How much would you like?"
        isOpen={openQuestions[2] || false}
        id="form-question-2"
        handleOpen={() => toggleQuestion(2)}
        firstOptionBoxTitle="250g"
        secondOptionBoxTitle="500g"
        thirdOptionBoxTitle="1000g"
        firstOptionBoxDescr="Perfect for the solo drinker. Yields about 12 delicious cups."
        secondOptionBoxDescr="Perfect option for a couple. Yields about 40 delectable cups."
        thirdOptionBoxDescr="Perfect for offices and events. Yields about 90 delightful cups."
        onOptionChange={setQuantity}
      />
      <FormOptions
        formQuestions="Want us to grind them?"
        isOpen={openQuestions[3] || false}
        id="form-question-3"
        handleOpen={() => toggleQuestion(3)}
        firstOptionBoxTitle="Wholebean"
        secondOptionBoxTitle="Filter"
        thirdOptionBoxTitle="Cafetiére"
        firstOptionBoxDescr="Best choice if you cherish the full sensory experience"
        secondOptionBoxDescr="For drip or pour-over coffee methods such as V60 or Aeropress"
        thirdOptionBoxDescr="Course ground beans specially suited for french press coffee"
        onOptionChange={setGrindOption}
      />
      <FormOptions
        formQuestions="How often should we deliver?"
        isOpen={openQuestions[4] || false}
        id="form-question-4"
        handleOpen={() => toggleQuestion(4)}
        firstOptionBoxTitle="Every week"
        secondOptionBoxTitle="Every 2 weeks"
        thirdOptionBoxTitle="Every month"
        firstOptionBoxDescr="$7.20 per shipment. Includes free first-class shipping."
        secondOptionBoxDescr="$9.60 per shipment. Includes free priority shipping."
        thirdOptionBoxDescr="$12.00 per shipment. Includes free priority shipping."
        onOptionChange={setDelivery}
      />

      <div className={styles.orderSummaryContainer}>
        <OrderSummary
          preference={preference}
          beanType={beanType}
          quantity={quantity}
          grindOption={grindOption}
          delivery={delivery}
        />
      </div>

      <div className={styles.createYourPlanButton}>
        <CreateYourPlanButton
          backgroundColor="#E2DEDB"
          onClick={() => setModalOpen(true)}
          marginTop="40px"
          buttonText="Create My Plan!"
        />
      </div>

      {modalOpen && <ModalCheckout />}
    </div>
  );
};
