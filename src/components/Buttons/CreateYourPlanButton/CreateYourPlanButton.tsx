import { useNavigate } from "react-router";
import styles from "./CreateYourPlanButton.module.scss";
export const CreateYourPlanButton = () => {
  const navigate = useNavigate();

  return (
    <>
      <button
        className={styles.createYourPlanButton}
        onClick={() => navigate("/create-your-plan")}
      >
        Create your plan
      </button>
    </>
  );
};
