import { CreateYourPlanButton } from "components/Buttons/CreateYourPlanButton/CreateYourPlanButton";
import styles from "./ModalCheckout.module.scss";
import { createPortal } from "react-dom";

interface ModalCheckoutProps {}

export const ModalCheckout = ({}: ModalCheckoutProps) => {
  return createPortal(
    <div className={styles.modalCheckout}>
      <div className={styles.modalCheckoutBlock}>
        <div className={styles.modalHeaderContainer}>
          <p className={styles.modalHeader}>Order Summary</p>
        </div>
        <div className={styles.modalContentContainer}>
          <p className={styles.modalContent}>
            “I drink my coffee as Filter, with a Decaf type of bean. 250g ground
            ala Cafetiére, sent to me Every Week.”
          </p>
          <p className={styles.modalDescr}>
            Is this correct? You can proceed to checkout or go back to plan
            selection if something is off. Subscription discount codes can also
            be redeemed at the checkout.{" "}
          </p>
          <div className={styles.modalFooter}>
            <div>
              <p className={styles.finalPrice}>$14.00/ mo</p>
            </div>
            <div>
              <CreateYourPlanButton
                backgroundColor="#0e8784"
                buttonText="Checkout"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modalCheckout") as HTMLElement
  );
};
