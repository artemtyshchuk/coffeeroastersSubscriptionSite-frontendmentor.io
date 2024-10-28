import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";
import styles from "./ModalCheckout.module.scss";
import { createPortal } from "react-dom";
import { OrderSummary } from "components/CreateYourPlan/ContentBlock/OrderSummary";
import { useFirebaseSaveData } from "hooks/useFirebaseSaveData";
import failedAnimation from "assets/Animation - 1729615749304.json";
import successAnimation from "assets/Animation - 1729614731993.json";
import Lottie from "lottie-react";
import { useState } from "react";
import { useScreenSize } from "hooks/useScreenSize";
import { ReactComponent as EditIcon } from "assets/editIcon.svg";

interface ModalCheckoutProps {
  preference: string;
  beanType: string;
  quantity: string;
  grindOption: string;
  delivery: string;
  closeModal: () => void;
  resetForm: () => void;
}

export const ModalCheckout = ({
  preference,
  beanType,
  quantity,
  grindOption,
  delivery,
  closeModal,
  resetForm,
}: ModalCheckoutProps) => {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const { smallScreen } = useScreenSize();

  const calculatePrice = () => {
    if (delivery === "Every week") {
      return "14.00";
    } else if (delivery === "Every 2 weeks") {
      return "16.40";
    } else if (delivery === "Every month") {
      return "18.80";
    }
  };

  const { saveData, dataSendedSuccessfully, dataNotSendedSuccessfully } =
    useFirebaseSaveData();

  const onSubmit = () => {
    setIsButtonDisabled(true);
    const data = {
      preference,
      beanType,
      quantity,
      grindOption,
      delivery,
    };

    saveData(data);

    setTimeout(() => {
      closeModal();
      resetForm();
    }, 3000);
  };

  return createPortal(
    <div className={styles.modalCheckout}>
      <div className={styles.modalCheckoutBlock}>
        {dataSendedSuccessfully && (
          <div className={styles.gifContainer}>
            <Lottie animationData={successAnimation} loop={false} />
          </div>
        )}

        {dataNotSendedSuccessfully && (
          <div className={styles.gifContainer}>
            <Lottie animationData={failedAnimation} loop={false} />
          </div>
        )}

        <div className={styles.modalHeaderContainer}>
          <p className={styles.modalHeader}>Order Summary</p>
        </div>

        <div className={styles.modalContentContainer}>
          <button className={styles.modalEdit} onClick={() => closeModal()}>
            <EditIcon className={styles.modalEditIcon} />
            Edit
          </button>
          <OrderSummary
            preference={preference}
            beanType={beanType}
            quantity={quantity}
            grindOption={grindOption}
            delivery={delivery}
            textColor="#83888F"
          />

          <p className={styles.modalDescr}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className={styles.modalFooter}>
            {!smallScreen.mobileScreen && (
              <>
                <p className={styles.finalPrice}>${calculatePrice()}/ mo</p>
              </>
            )}
            <div>
              <CreateYourPlanButton
                backgroundColor="#0e8784"
                buttonText={
                  smallScreen.mobileScreen
                    ? `Checkout - $${calculatePrice()}/mo`
                    : "Checkout"
                }
                onClick={onSubmit}
                disabled={isButtonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modalCheckout") as HTMLElement
  );
};
