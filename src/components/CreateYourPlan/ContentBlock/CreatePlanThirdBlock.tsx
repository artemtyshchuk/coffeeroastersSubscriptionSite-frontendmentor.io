import { useState } from "react";
import styles from "../CreateYourPlan.module.scss";
import { FormSteps } from "./FormSteps";
import { FormOptions } from "./FormOptions";
import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";
import { ModalCheckout } from "components/ModalCheckout";

export const CreatePlanThirdBlock = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);
  const [openQuestions, setOpenQuestions] = useState<{
    [key: number]: boolean;
  }>({});
  const [modalOpen, setModalOpen] = useState(false);

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

      <div className={styles.orderSummaryContainer}>
        <p className={styles.orderSummaryTitle}>Order Summary</p>
        <p className={styles.orderSummaryDescr}>
          “I drink my coffee using Capsules, with a _____ type of bean. _____ ,
          sent to me _____.”
        </p>
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

//npm install firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCf6vlYRTY9nKAQUB6OZCPVwZoV6oxU2AI",
//   authDomain: "coffeeroaster-25964.firebaseapp.com",
//   projectId: "coffeeroaster-25964",
//   storageBucket: "coffeeroaster-25964.appspot.com",
//   messagingSenderId: "773568759949",
//   appId: "1:773568759949:web:759d148d20b520e43fbac4",
//   measurementId: "G-J6YTDK714D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
